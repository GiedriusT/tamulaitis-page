import React from 'react';
import * as S from './ContactButton.styles';
import mailIcon from './mail-icon.svg';
import { CONTACT_EMAIL, CONTACT_BUTTON_TEXT } from '../../constants';

type ContactButtonProps = S.ContactButtonProps & {};

const ContactButton: React.FC<ContactButtonProps> = (props) => (
  <S.ContactButton {...props} onClick={() => window.location.href = `mailto:${CONTACT_EMAIL}`}>
    <S.MailIcon src={mailIcon} alt={CONTACT_BUTTON_TEXT} $footerVariation={props.$footerVariation} />
    <S.Text $footerVariation={props.$footerVariation}>{CONTACT_BUTTON_TEXT}</S.Text>
  </S.ContactButton>
);

export default ContactButton;
