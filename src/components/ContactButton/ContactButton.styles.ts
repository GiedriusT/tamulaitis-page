import styled from 'styled-components';

export const ContactButtonStyled = styled.button`
  font-size: 20px;
  border-radius: 100px;
  border: 0;
  padding: 11px 33px;
  color: white;
  cursor: pointer;
  background-color: rgba(33, 150, 243, 1);
  transition: background-color 0.17s ease-out;

  &:hover {
    background-color: rgba(33, 150, 243, 0.7);
    transition: background-color 0.17s ease-out;
  }
`;
