import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { regularTheme } from '../../theme';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import * as S from './Layout.styles';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.LayoutContainer>
      <ThemeProvider theme={regularTheme}>
        <GlobalStyle />
        <S.PaddedContainer>
          <Header />
          <S.ContentContainer>{children}</S.ContentContainer>
        </S.PaddedContainer>
        <Footer />
      </ThemeProvider>
    </S.LayoutContainer>
  );
}

export default Layout;
