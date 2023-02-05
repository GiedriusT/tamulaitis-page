import React from 'react';
import { GlobalStyle } from '../../theme/GlobalStyle';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import * as S from './Layout.styles';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <S.LayoutContainer>
      <GlobalStyle />
      <Header />
      <S.ContentContainer>
        {children}
      </S.ContentContainer>
      <Footer />
    </S.LayoutContainer>
  );
};

export default Layout;