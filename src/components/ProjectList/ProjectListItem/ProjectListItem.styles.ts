import styled from 'styled-components';

export const ProjectListItemContainer = styled.div`
  width: 32%;
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
`;

export const ProjectListItemTitle = styled.h3<{ $loading?: boolean }>`
  position: absolute;
  bottom: 7%;
  left: 0;
  width: auto;
  background-color: ${props => !props.$loading ? 'black' : 'rgba(0, 0, 0, 0.1)'};
  color: white;
  padding: 7px 20px;
  margin: 0;
  transition: bottom 0.6s ease-out;
  ${ProjectListItemIternalContainer}:hover & {
    bottom: 20%;
    transition: bottom 0.17s ease-out;
  }
`;

export const ProjectListItemSubtitle = styled.p<{ $loading?: boolean }>`
  position: absolute;
  bottom: 11%;
  left: 0%;
  width: auto;
  background-color: ${props => !props.$loading ? 'black' : 'rgba(0, 0, 0, 0.1)'};
  color: white;
  padding: 5px 20px 5px 20px;
  transform: translate(-100%, 0);
  margin: 0;
  transition: transform 0.6s ease-out;
  ${ProjectListItemIternalContainer}:hover & {
    transform: translate(0, 0);
    transition: transform 0.17s ease-out;
  }
`;
