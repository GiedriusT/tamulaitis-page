import { visit } from 'unist-util-visit';
import { isInlineLink } from './utils';
import type { AstLinkNode, AstNode } from './types';

type BandcampTralbum = {
  current: {
    id: number;
    title: string;
    type: 'album' | 'track';
  };
  artist: string;
};

const isBandcampLink = (node: AstLinkNode) => (
  node.url.indexOf('https://') === 0
  && node.url.indexOf('.bandcamp.com/') !== -1
  && node.url.indexOf('/album/') !== -1
);

const decodeHtmlAttrJson = (value: string) => (
  value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '\'')
    .replace(/&amp;/g, '&')
);

const extractTralbum = (html: string) => {
  const match = html.match(/data-tralbum="([^"]+)"/);
  if (!match) throw new Error('Bandcamp: data-tralbum not found');
  const decoded = decodeHtmlAttrJson(match[1]);
  return JSON.parse(decoded) as BandcampTralbum;
};

const processLink = async (node: AstLinkNode, _indexInParent: number, parent: AstNode) => {
  if (!isBandcampLink(node) || isInlineLink(parent)) return;

  const res = await fetch(node.url);
  if (!res.ok) throw new Error(`Bandcamp page request failed: ${res.status}`);
  const html = await res.text();
  const tralbum = extractTralbum(html);
  const albumId = tralbum.current.id;
  const embedParams = {
    album: albumId,
    size: 'large',
    bgcol: 'e8f1f5',
    linkcol: '1989ac',
    artwork: 'small',
    transparent: 'true',
  };
  const embedParamsString = Object.entries(embedParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('/');
  const embedSrc = `https://bandcamp.com/EmbeddedPlayer/${embedParamsString}/`;
  const linkText = `${tralbum.current.title} by ${tralbum.artist}`;

  node.type = 'mdxJsxFlowElement';
  node.name = 'ArticleBandcampEmbed';
  node.attributes = [
    { type: 'mdxJsxAttribute', name: 'url', value: node.url },
    { type: 'mdxJsxAttribute', name: 'embedSrc', value: embedSrc },
    { type: 'mdxJsxAttribute', name: 'linkText', value: linkText },
  ];
  node.children = [];
  delete node.value;
};

const remarkBandcampEmbed = () => async function transformer(tree: AstNode) {
  const transforms: Array<Promise<void>> = [];
  visit(tree, 'link', (node: AstLinkNode, index: number, parent: AstNode) => {
    transforms.push(processLink(node, index, parent));
  });
  await Promise.all(transforms);
};

export default remarkBandcampEmbed;

