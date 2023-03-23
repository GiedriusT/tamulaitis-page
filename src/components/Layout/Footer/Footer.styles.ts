import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding-top: 30px;
  padding-bottom: 60px;
`;

export const ProfilePictureContainer = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;

  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50%;
  }
`;

export const InfoContainer = styled.div`
  padding-top: 30px;
`;

export const ProfileTitle = styled.h3`
  text-align: center;
`;

export const ProfileDescription = styled.p`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  font-size: 0.8rem;
  line-height:1.6;
`;

export const ProfileLinks = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
`;

export const ProfileLink = styled.a`
  margin: 0 5px;
`;

export const ContactButtonContainer = styled.div`
  padding-top: 20px;
  text-align: center;
`;
