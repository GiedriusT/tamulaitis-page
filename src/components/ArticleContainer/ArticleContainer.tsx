import React from 'react';

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
