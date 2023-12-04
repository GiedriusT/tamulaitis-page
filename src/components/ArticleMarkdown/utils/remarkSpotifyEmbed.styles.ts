import { css } from 'styled-components';
import { mediaEmbed } from '../../../theme/mixins';
import { ArticleContainer } from '../ArticleMarkdown.styles';

// eslint-disable-next-line import/prefer-default-export
export const remarkSpotifyEmbedStyles = css`
  ${ArticleContainer} {
    .spotify-embed {
      ${mediaEmbed}
    }
  }
`;
