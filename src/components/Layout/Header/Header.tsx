import React from 'react';
import { useLocation } from 'react-router-dom';
import { BRAND_NAME } from '../../../constants';
import ContactButton from '../../ContactButton/ContactButton';
import * as S from './Header.styles';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  const isHomepage = pathname === '/';
  const title = BRAND_NAME;

  return (
    <S.HeaderContainer>
      {isHomepage ? (
        <S.TitleSectionContainer>
          <S.HeaderTitle>{title}</S.HeaderTitle>
        </S.TitleSectionContainer>
      ) : (
        <S.TitleSectionWithBackLinkContainer>
          <S.BackLink to='/'>
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
};

export default Header;
