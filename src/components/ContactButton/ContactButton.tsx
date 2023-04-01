import React from 'react';
import * as S from './ContactButton.styles';

const ContactButton: React.FC = () => (
  <S.ContactButtonStyled onClick={() => window.location.href = 'mailto:giedrius@tamulaitis.lt'}>Contact Me</S.ContactButtonStyled>
);

export default ContactButton;
