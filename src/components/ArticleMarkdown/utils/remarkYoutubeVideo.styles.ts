import { css } from 'styled-components';
import { mediaEmbed, mediaEmbedFullWidthOnMobile } from '../../../theme/mixins';

export const remarkYoutubeVideoStyles = css`
  // We use class name for YouTube embeds, because the style is added by Remark
  // plugin and we can't use styled-components.
  .youtube-embed {
    ${mediaEmbed}
    ${mediaEmbedFullWidthOnMobile}

    & iframe {
      /* aspect-ratio: 16 / 9; */
      aspect-ratio: 4 / 3;
    }
  }
`;