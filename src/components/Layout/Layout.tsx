import React from 'react';
import GlobalStyle from '../../theme/GlobalStyle';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import * as S from './Layout.styles';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.LayoutContainer>
      <GlobalStyle />
      <S.PaddedContainer>
        <Header />
        <S.ContentContainer>
          {children}
        </S.ContentContainer>
      </S.PaddedContainer>
      <Footer />
    </S.LayoutContainer>
  );
}

export default Layout;
