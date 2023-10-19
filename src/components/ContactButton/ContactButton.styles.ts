import styled, { css } from 'styled-components';
import { COLORS } from '../../theme/constants';

export interface ContactButtonProps {
  $footerVariation?: boolean
}

export const ContactButton = styled.button<ContactButtonProps>`
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

  ${(props) => !props.$footerVariation && css`
    @media (max-width: 499px) {
      padding-left: 22px;
      padding-right: 22px;
    }
  `};
`;

export const MailIcon = styled.img<{ $footerVariation?: boolean }>`
  width: 22px;
  line-height: 1;
  display: inline-block;
  transform: translate(0, 1px);

  display: none;
  ${(props) => !props.$footerVariation && css`
    @media (max-width: 499px) {
      display: inline-block;
    }
  `};
`;

export const Text = styled.span<{ $footerVariation?: boolean }>`
  ${(props) => !props.$footerVariation && css`
    @media (max-width: 499px) {
      display: none;
    }
  `};
`;
