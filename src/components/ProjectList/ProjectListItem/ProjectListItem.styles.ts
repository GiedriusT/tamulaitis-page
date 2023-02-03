import styled from 'styled-components';

export const ProjectListItemContainer = styled.div`
  width: 100%;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 785px) {
    width: 47%;
  }
  @media (min-width: 1112px) {
    width: 32%;
  }
`;

export const ProjectListItemIternalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const ProjectListItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  object-fit: cover;
  pointer-events: none;
`;

export const ProjectListItemVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

export const ProjectListItemTitle = styled.h3<{ $loading?: boolean }>`
  position: absolute;
  left: 0;
  width: auto;
  bottom: 7%;
  color: white;
  background-color: ${props => !props.$loading ? 'black' : 'rgba(0, 0, 0, 0.1)'};
  margin: 0;
  padding: 7px 20px;
  transition: bottom 0.6s ease-out;
  ${ProjectListItemIternalContainer}:hover & {
    bottom: 20%;
    transition: bottom 0.17s ease-out;
  }
`;

export const ProjectListItemSubtitle = styled.p<{ $loading?: boolean }>`
  position: absolute;
  left: 0;
  width: auto;
  bottom: 11%;
  color: white;
  background-color: ${props => !props.$loading ? 'black' : 'rgba(0, 0, 0, 0.1)'};
  margin: 0;
  padding: 5px 20px 5px 20px;
  transform: translate(-100%, 0);
  transition: transform 0.6s ease-out;
  ${ProjectListItemIternalContainer}:hover & {
    transform: translate(5%, 0);
    transition: transform 0.17s ease-out;
  }
`;
