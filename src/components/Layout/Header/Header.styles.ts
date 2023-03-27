import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  padding-top: 1.66em;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleSectionContainer = styled.div`
  position: relative;
`;

export const TitleSectionWithBackLinkContainer = styled(TitleSectionContainer)`
  cursor: pointer;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
`;

const commonH3Styles = css`
  font-size: 1.17rem;
  line-height: 1.2;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const BackArrow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translate(5px);
  transition: opacity 0.3s ease-out, transform 0.5s ease-out;

  & h3 {
    ${commonH3Styles}
  }

  ${TitleSectionWithBackLinkContainer}:hover & {
    opacity: 1;
    transform: translate(0);
    transition: opacity 0.5s ease-out, transform 0.3s ease-out;
  }
`;

export const HeaderTitle = styled.h3`
  text-decoration: none;
  ${commonH3Styles}
  transition: transform 0.5s ease-out;

  ${TitleSectionWithBackLinkContainer}:hover & {
    transform: translate(30px);
    transition: transform 0.3s ease-out;
  }
`;

export const ContactButtonContainer = styled.div`

`;
