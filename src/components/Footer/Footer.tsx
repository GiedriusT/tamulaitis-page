import React from 'react';
import S from './Footer.module.scss';
import {
  WHAT_I_DO, MY_NAME, LINKEDIN_URL, GITHUB_URL,
} from '../../constants';
import ContactButton from '../ContactButton/ContactButton';

function Footer() {
  return (
    <footer className={S.footerContainer}>
      <div className={S.infoContainer}>
        <div className={S.profilePictureContainer}>
          <img src="/giedrius-tamulaitis-profile-picture.jpg" alt={MY_NAME} />
        </div>
        <h3 className={S.profileTitle}>{MY_NAME}</h3>
        <p className={S.profileDescription}>{WHAT_I_DO}</p>
        <div className={S.profileLinks}>
          <a className={S.profileLinkScreen} href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className={S.profileLinkPrint} href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">{LINKEDIN_URL}</a>
          <a className={S.profileLinkScreen} href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className={S.profileLinkPrint} href={GITHUB_URL} target="_blank" rel="noopener noreferrer">{GITHUB_URL}</a>
        </div>
        <div className={S.contactButtonContainer}>
          <ContactButton footerVariation />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
