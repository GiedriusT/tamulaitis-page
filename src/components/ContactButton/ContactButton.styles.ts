import styled, { css } from 'styled-components';
import { COLORS } from '../../theme/constants';

export interface ContactButtonStyledProps {
  $footerVariation?: boolean
}

export const ContactButtonStyled = styled.button<ContactButtonStyledProps>`
  font-size: 1.1rem;
  /* font-weight: 300; */
  border-radius: 100px;
  border: 0;
  padding: 11px 33px;
  color: white;
  cursor: pointer;
  background-color: #1989ac;
  transition: background-color 0.17s ease-out;
  white-space: nowrap;

  &:hover {
    ${(props) => props.$footerVariation ? css`
      background-color: ${COLORS.primaryBackround};
      color: ${COLORS.footerBackground};
    ` : css`
      background-color: #283e56;
    `}
    transition: background-color 0.17s ease-out;
  }
`;
