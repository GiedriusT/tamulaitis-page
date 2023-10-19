import React from 'react';
import * as S from './ContactButton.styles';
import mailIcon from './mail-icon.svg';
import { CONTACT_EMAIL, CONTACT_BUTTON_TEXT } from '../../constants';

interface ContactButtonProps extends S.ContactButtonStyledProps {}

const ContactButton: React.FC<ContactButtonProps> = (props) => (
  <S.ContactButtonStyled {...props} onClick={() => window.location.href = `mailto:${CONTACT_EMAIL}`}>
    <S.MailIconStyled src={mailIcon} alt={CONTACT_BUTTON_TEXT} $footerVariation={props.$footerVariation} />
    <S.TextStyled $footerVariation={props.$footerVariation}>{CONTACT_BUTTON_TEXT}</S.TextStyled>
  </S.ContactButtonStyled>
);

export default ContactButton;
