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
        components={
          {
            // eslint-disable-next-line react/no-unstable-nested-components
            // pre(props) {
            //   const { node, className, children: preChildren } = props;
            //   const match = /language-(\w+)/.exec(className || '');
            //   const language = match ? match[1] : null;
            //   console.log(props);
            //   console.log(language);
            //   return <div>{preChildren}</div>;
            // },
            // eslint-disable-next-line react/no-unstable-nested-components
            code(props) {
              const { node, className, children: codeChildren } = props;
              const match = /language-(\w+)/.exec(className || '');
              const language = match ? match[1] : null;
              console.log(props);
              console.log(language);
              return <pre>{codeChildren}</pre>;
            },
          }
        }
      >
        {children}
      </Markdown>
    </S.ArticleContainer>
  );
}

export default ArticleMarkdown;
