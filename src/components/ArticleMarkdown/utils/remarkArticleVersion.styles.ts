import { css } from 'styled-components';
import { ArticleContainer } from '../ArticleMarkdown.styles';

// eslint-disable-next-line import/prefer-default-export
export const remarkArticleVersionStyles = css`
  ${ArticleContainer} {
    .article-version {
      color: ${(props) => props.theme.colors.primaryTextSilent};
      font-size: 0.8rem;
    }
  }
`;
