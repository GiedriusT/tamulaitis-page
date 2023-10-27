import React from 'react';
import Markdown, { Options } from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkYoutubeVideo from './utils/remarkYoutubeVideo';
import remarkSpotifyEmbed from './utils/remarkSpotifyEmbed';
import remarkImage from './utils/remarkImage';
import remarkImageGallery from './utils/remarkImageGallery';
import remarkArticleTitle from './utils/remarkArticleTitle';
import remarkArticleVersion from './utils/remarkArticleVersion';
import * as S from './ArticleMarkdown.styles';

function ArticleMarkdown({ children }: Options) {
  return (
    <S.ArticleContainer>
      <Markdown
        remarkPlugins={[
          remarkYoutubeVideo,
          remarkSpotifyEmbed,
          remarkImage,
          remarkImageGallery,
          remarkArticleTitle,
          remarkArticleVersion,
        ]}
        rehypePlugins={[
          rehypeRaw,
        ]}
      >
        {children}
      </Markdown>
    </S.ArticleContainer>
  );
}

export default ArticleMarkdown;
