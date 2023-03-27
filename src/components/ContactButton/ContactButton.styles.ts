import styled from 'styled-components';

export const ContactButtonStyled = styled.button`
  font-size: 1.1rem;
  /* font-weight: 300; */
  border-radius: 100px;
  border: 0;
  padding: 11px 33px;
  color: white;
  cursor: pointer;
  background-color: #1989ac;
  transition: background-color 0.17s ease-out;

  &:hover {
    background-color: #283e56;
    transition: background-color 0.17s ease-out;
  }
`;
