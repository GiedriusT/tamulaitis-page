import React from 'react';
// Here we do an exception to importing SCSS as modules because the approach
// doesn't work with remark plugins. That's why remark plugin SCSS files export
// global styles and then we scope them to .article-container class in
// remark-plugins/styles.scss.
import '../../remark-plugins/styles.scss';

const DEFAULT_MIN_HEIGHT = 100;

type HeaderProps = {
  minHeight?: number;
  children: React.ReactNode;
};

function Header({ minHeight, children }: HeaderProps) {
  return (
    <div className="article-container" style={{ minHeight: `${minHeight ?? DEFAULT_MIN_HEIGHT}vh` }}>
      {children}
    </div>
  );
}

export default Header;
