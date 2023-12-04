import { css } from 'styled-components';
import { mediaEmbed, mediaEmbedFullWidthOnMobile } from '../../../theme/mixins';
import { ArticleContainer } from '../ArticleMarkdown.styles';

// eslint-disable-next-line import/prefer-default-export
export const remarkYoutubeVideoStyles = css`
  ${ArticleContainer} {
    // We use class name for YouTube embeds, because the style is added by Remark
    // plugin and we can't use styled-components.
    .youtube-embed {
      ${mediaEmbed}
      ${mediaEmbedFullWidthOnMobile}

      & iframe {
        aspect-ratio: 16 / 9;
      }

      & .youtube-embed-print-text {
        display: none;
      }

      @media print {
        & iframe {
          display: none;
        }

        & .youtube-embed-print-text {
          display: inline;
        }
      }
    }
  }
`;
