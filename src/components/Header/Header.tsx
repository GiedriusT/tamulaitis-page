import React from 'react';
// import { useLocation } from 'react-router-dom';
import { MY_NAME } from '../../constants';
import ContactButton from '../ContactButton/ContactButton';
import S from './Header.module.scss';

type HeaderProps = {
  isHomepage?: boolean;
};

function Header({ isHomepage }: HeaderProps) {
  const title = MY_NAME;

  return (
    <header className={S.headerContainer}>
      {isHomepage ? (
        <div className={S.titleSectionContainer}>
          <h3 className={S.title}>{title}</h3>
        </div>
      ) : (
        <div className={`${S.titleSectionContainer} ${S.withBackLink}`}>
          <a href="/">
            <div className={S.backArrow}><h3>&lt;</h3></div>
            <h3 className={S.title}>{title}</h3>
          </a>
        </div>
      )}
      <div>
        <ContactButton />
      </div>
    </header>
  );
}

export default Header;
