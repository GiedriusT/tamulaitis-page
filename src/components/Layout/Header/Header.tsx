import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactButton from '../../ContactButton/ContactButton';
import * as S from './Header.styles';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  const isHomepage = pathname === '/';
  const title = 'Giedrius Tamulaitis';

  return (
    <S.HeaderContainer>
      {isHomepage ? (
        <S.TitleSectionContainer>
          <S.HeaderTitle>{title}</S.HeaderTitle>
        </S.TitleSectionContainer>
      ) : (
        <S.TitleSectionWithBackLinkContainer>
          <Link to='/'>
            <S.BackArrow><h3>&lt;</h3></S.BackArrow>
            <S.HeaderTitle>{title}</S.HeaderTitle>
          </Link>
        </S.TitleSectionWithBackLinkContainer>
      )}
      <S.ContactButtonContainer>
        <ContactButton />
      </S.ContactButtonContainer>
    </S.HeaderContainer>
  );
};

export default Header;
