import React from 'react';
import * as S from './ContactButton.styles';

interface ContactButtonProps extends S.ContactButtonStyledProps {}

const ContactButton: React.FC<ContactButtonProps> = (props) => (
  <S.ContactButtonStyled {...props} onClick={() => window.location.href = 'mailto:giedrius@tamulaitis.lt'}>Contact Me</S.ContactButtonStyled>
);

export default ContactButton;
