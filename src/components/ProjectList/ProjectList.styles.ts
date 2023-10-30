import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  padding-bottom: 30px;
`;

export const ProjectsItemsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 20px;
  column-gap: 2%;
  &::after {
    content: "";
    flex: auto;
  }
  @media (max-width: 499px) {
    row-gap: 0;
  }
`;

export const ProjectsComingSoonContainer = styled.div`
  font-size: 1.1rem;
  font-weight: 100;
`;
