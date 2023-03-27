import styled from 'styled-components';

export const HeroContainer = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const HeroTitle = styled.h1`
  width: 90%;
  max-width: 90%;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.7;
  @media (max-width: 499px) {

  }
  @media (min-width: 785px) {
    width: 800px;
  }
  @media (min-width: 1112px) {
    width: 800px;
  }
`;
