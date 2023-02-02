import React from "react";
import { Link } from "react-router-dom";
import ContactButton from "../../ContactButton/ContactButton";
import { BackArrow, ContactButtonContainer, HeaderContainer, HeaderTitle, TitleSectionContainer } from "./Header.styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <TitleSectionContainer>
        <a href='/'>
          <BackArrow><h3>&lt;</h3></BackArrow>
          <HeaderTitle>Giedrius Tamulaitis</HeaderTitle>
        </a>
      </TitleSectionContainer>
      <ContactButtonContainer>
        <ContactButton />
      </ContactButtonContainer>
    </HeaderContainer>
  )
}

export default Header
