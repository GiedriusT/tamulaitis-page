import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding-top: calc(2 * 1.66em);
  padding-bottom: calc(4 * 1.66em);
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
  /* max-width: 500px; */
  margin-left: auto;
  margin-right: auto;
  /* text-align: justify; */
  font-size: 1.1rem;
  /* line-height: 1.6; */
  font-weight: 100;
`;

export const ProfileLinks = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
`;

export const ProfileLink = styled.a`
  margin: 0 0.83rem;
`;

export const ContactButtonContainer = styled.div`
  padding-top: 1.66em;
  text-align: center;
`;
