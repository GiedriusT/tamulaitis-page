import React from 'react';
import * as S from './ContactButton.styles';
import mailIcon from './mail-icon.svg';
import { CONTACT_EMAIL, CONTACT_BUTTON_TEXT } from '../../constants';

type ContactButtonProps = S.ContactButtonProps & {};

function ContactButton({ $footerVariation }: ContactButtonProps) {
  const onClick = () => {
    window.location.href = `mailto:${CONTACT_EMAIL}`;
  };

  return (
    <S.ContactButton $footerVariation={$footerVariation} onClick={onClick}>
      <S.MailIcon src={mailIcon} alt={CONTACT_BUTTON_TEXT} $footerVariation={$footerVariation} />
      <S.Text $footerVariation={$footerVariation}>{CONTACT_BUTTON_TEXT}</S.Text>
      <S.TextPrintOnly>{CONTACT_EMAIL}</S.TextPrintOnly>
    </S.ContactButton>
  );
}

export default ContactButton;
