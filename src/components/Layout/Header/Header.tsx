import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactButton from '../../ContactButton/ContactButton';
import { BackArrow, ContactButtonContainer, HeaderContainer, HeaderTitle, TitleSectionContainer, TitleSectionWithBackLinkContainer } from './Header.styles';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  const isHomepage = pathname === '/';
  const title = 'Giedrius Tamulaitis';

  return (
    <HeaderContainer>
      {isHomepage ? (
        <TitleSectionContainer>
          <HeaderTitle>{title}</HeaderTitle>
        </TitleSectionContainer>
      ) : (
        <TitleSectionWithBackLinkContainer>
          <Link to='/'>
            <BackArrow><h3>&lt;</h3></BackArrow>
            <HeaderTitle>{title}</HeaderTitle>
          </Link>
        </TitleSectionWithBackLinkContainer>
      )}
      <ContactButtonContainer>
        <ContactButton />
      </ContactButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
