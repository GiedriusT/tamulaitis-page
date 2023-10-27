import React from 'react';
import { useLocation } from 'react-router-dom';
import { MY_NAME } from '../../../constants';
import ContactButton from '../../ContactButton/ContactButton';
import * as S from './Header.styles';

function Header() {
  const { pathname } = useLocation();

  const isHomepage = pathname === '/';
  const title = MY_NAME;

  return (
    <S.HeaderContainer>
      {isHomepage ? (
        <S.TitleSectionContainer>
          <S.HeaderTitle>{title}</S.HeaderTitle>
        </S.TitleSectionContainer>
      ) : (
        <S.TitleSectionWithBackLinkContainer>
          <S.BackLink to="/">
            <S.BackArrow><h3>&lt;</h3></S.BackArrow>
            <S.HeaderTitle>{title}</S.HeaderTitle>
          </S.BackLink>
        </S.TitleSectionWithBackLinkContainer>
      )}
      <S.ContactButtonContainer>
        <ContactButton />
      </S.ContactButtonContainer>
    </S.HeaderContainer>
  );
}

export default Header;
