import React, { useEffect } from 'react';
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
  useEffect(() => {
    const scrollHanhler = () => {
      const images = document.querySelectorAll('img.spin-on-scroll');
      const scroll = ((window.scrollY / window.innerHeight) * 80).toFixed(2);
      for (const image of images) {
        (image as HTMLElement).style.transform = `rotate(${scroll}deg)`;
      }
    };

    window.addEventListener('scroll', scrollHanhler, false);
    return () => {
      window.removeEventListener('scroll', scrollHanhler, false);
    };
  }, []);

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
