import styled from "styled-components";

export const ProjectListItemContainer = styled.div`
  width: 32%;
`;

export const ProjectListItemIternalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
`;

export const ProjectListItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  object-fit: cover;
`;

export const ProjectListItemTitle = styled.h3`
  position: absolute;
  bottom: 7px;
  left: 0;
  width: auto;
  background-color: black;
  color: white;
  padding: 7px 20px;
  margin: 0;
  ${ProjectListItemIternalContainer}:hover & {
    text-decoration: underline;
  }
`;
