import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleSectionContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const BackArrow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translate(5px);
  transition: opacity 0.3s ease-out, transform 0.5s ease-out;

  ${TitleSectionContainer}:hover & {
    opacity: 1;
    transform: translate(0);
    transition: opacity 0.5s ease-out, transform 0.3s ease-out;
  }
`;

export const HeaderTitle = styled.h3`
  transition: transform 0.5s ease-out;

  ${TitleSectionContainer}:hover & {
    transform: translate(30px);
    transition: transform 0.3s ease-out;
  }
`;

export const ContactButtonContainer = styled.div`

`;
