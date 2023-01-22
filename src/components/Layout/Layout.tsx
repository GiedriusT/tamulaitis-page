import React from 'react';
import { LayoutContainer } from './Layout.styles';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  );
};

export default Layout;
