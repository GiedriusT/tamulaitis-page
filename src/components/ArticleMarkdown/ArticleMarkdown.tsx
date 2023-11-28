import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkYoutubeVideo from './utils/remarkYoutubeVideo';
import remarkSpotifyEmbed from './utils/remarkSpotifyEmbed';
import remarkImage from './utils/remarkImage';
import remarkImageGallery from './utils/remarkImageGallery';
import remarkArticleTitle from './utils/remarkArticleTitle';
import remarkArticleVersion from './utils/remarkArticleVersion';
import remarkLink from './utils/remarkLink';
import remarkInlineCodeProperty from './utils/remarkInlineCodeProperty';
import * as S from './ArticleMarkdown.styles';
import codeElementProcesor from './utils/codeElementProcessor';

type ArticleMarkdownProps = {
  children: string
};

function ArticleMarkdown({ children }: ArticleMarkdownProps) {
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
          remarkLink,
          remarkInlineCodeProperty,
        ]}
        rehypePlugins={[
          rehypeRaw,
        ]}
        components={{
          code: codeElementProcesor,
        }}
      >
        {children}
      </Markdown>
    </S.ArticleContainer>
  );
}

export default ArticleMarkdown;
