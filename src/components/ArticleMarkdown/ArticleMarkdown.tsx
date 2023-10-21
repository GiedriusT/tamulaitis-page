import React from 'react';
import Markdown, { Options } from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkYoutubeVideo from './utils/remarkYoutubeVideo';
import remarkSpotifyEmbed from './utils/remarkSpotifyEmbed';
import remarkImageGallery from './utils/remarkImageGallery';
import remarkArticleTitle from './utils/remarkArticleTitle';
import remarkArticleVersion from './utils/remarkArticleVersion';
import * as S from './ArticleMarkdown.styles';

const ArticleMarkdown: React.FC<Options> = ({ children }) => {
  return (
    <S.ArticleContainer>
      <Markdown
        remarkPlugins={[
          remarkYoutubeVideo,
          remarkSpotifyEmbed,
          remarkImageGallery,
          remarkArticleTitle,
          remarkArticleVersion,
        ]}
        rehypePlugins={[
          rehypeRaw,
        ]}
        // TODO: support for this was removed in newest version, need to find a way to do it
        // linkTarget="_blank"
      >
        {children}
      </Markdown>
    </S.ArticleContainer>
  );
};

export default ArticleMarkdown;
