import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { remarkYoutubeVideoStyles } from '../components/ArticleMarkdown/utils/remarkYoutubeVideo.styles';
import { remarkSpotifyEmbedStyles } from '../components/ArticleMarkdown/utils/remarkSpotifyEmbed.styles';
import { remarkImageGalleryStyles } from '../components/ArticleMarkdown/utils/remarkImageGallery.styles';
import { remarkArticleTitleStyles } from '../components/ArticleMarkdown/utils/remarkArticleTitle.styles';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    padding: 0;
    margin: 0;
    border: 0;
    width: 100%;
    height: 100%;
    font-family: 'Sora', sans-serif;
    background-color: #e8f1f5;
    line-height: 1.9;
    letter-spacing: 0.5px;
  }

  a {
    color: black;
    &:hover {
      text-decoration: none;
    }
  }

  p {
    font-size: 1.1rem;
    margin-block-end: 1.66em;
    font-weight: 400;
  }

  h1 {
    line-height: 1.3;
    padding-bottom: calc(0.83em);
  }

  h2, h3, h4 {
    margin-block-start: 1.66em;
  }

  // Here we add all styles that are used by Remark plugins. I didn't find
  // a nicer way of making it work using styled components. I'm not sure if
  // we can hane multiple createGlobalStyle in the same project. If we can it
  // would be better to move them into cpomponents/ArticleMarkdown.
  ${remarkYoutubeVideoStyles}
  ${remarkSpotifyEmbedStyles}
  ${remarkImageGalleryStyles}
  ${remarkArticleTitleStyles}
`;
