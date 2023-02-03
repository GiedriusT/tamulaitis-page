import React from 'react';
import { GlobalStyle } from '../../theme/GlobalStyle';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { LayoutContainer, ContentContainer } from './Layout.styles';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Header />
      <ContentContainer>
        {children}
      </ContentContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;