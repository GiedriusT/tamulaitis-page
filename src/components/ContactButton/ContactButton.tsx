import React from 'react';
import * as S from './ContactButton.styles';
import mailIcon from './mail-icon.svg';

interface ContactButtonProps extends S.ContactButtonStyledProps {}

const ContactButton: React.FC<ContactButtonProps> = (props) => (
  <S.ContactButtonStyled {...props} onClick={() => window.location.href = 'mailto:giedrius@tamulaitis.lt'}>
    <S.MailIconStyled src={mailIcon} alt="Contact Me" $footerVariation={props.$footerVariation} />
    <S.TextStyled $footerVariation={props.$footerVariation}>Contact Me</S.TextStyled>
  </S.ContactButtonStyled>
);

export default ContactButton;
