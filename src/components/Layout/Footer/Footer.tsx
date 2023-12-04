import React from 'react';
import * as S from './Footer.styles';
import ContactButton from '../../ContactButton/ContactButton';
import profilePicture from './giedrius-tamulaitis-profile-picture.jpg';
import {
  WHAT_I_DO, MY_NAME, LINKEDIN_URL, GITHUB_URL,
} from '../../../constants';

function Footer() {
  return (
    <S.FooterContainer>
      <S.InfoContainer>
        <S.ProfilePictureContainer>
          <img src={profilePicture} alt={MY_NAME} />
        </S.ProfilePictureContainer>
        <S.ProfileTitle>{MY_NAME}</S.ProfileTitle>
        <S.ProfileDescription>{WHAT_I_DO}</S.ProfileDescription>
        <S.ProfileLinks>
          <S.ProfileLinkScreen href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</S.ProfileLinkScreen>
          <S.ProfileLinkPrint href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">{LINKEDIN_URL}</S.ProfileLinkPrint>
          <S.ProfileLinkScreen href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</S.ProfileLinkScreen>
          <S.ProfileLinkPrint href={GITHUB_URL} target="_blank" rel="noopener noreferrer">{GITHUB_URL}</S.ProfileLinkPrint>
        </S.ProfileLinks>
        <S.ContactButtonContainer>
          <ContactButton $footerVariation />
        </S.ContactButtonContainer>
      </S.InfoContainer>
    </S.FooterContainer>
  );
}

export default Footer;
