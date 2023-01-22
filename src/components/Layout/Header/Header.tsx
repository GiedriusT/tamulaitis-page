import React from "react";
import ContactButton from "../../ContactButton/ContactButton";
import { ContactButtonContainer, HeaderContainer, HeaderTitle } from "./Header.styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Giedrius Tamulaitis</HeaderTitle>
      <ContactButtonContainer>
        <ContactButton />
      </ContactButtonContainer>
    </HeaderContainer>
  )
}

export default Header
