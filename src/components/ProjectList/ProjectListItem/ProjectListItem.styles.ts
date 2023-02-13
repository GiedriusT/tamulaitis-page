import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { TransitionStatus } from 'react-transition-group';

export const BACK_TO_IMAGE_FADE_DURATION = 700;

export const ProjectListItemContainer = styled.div`
  width: 100%;
  @media (min-width: 785px) {
    width: 49%;
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

const ProjectListItemImageBase = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  object-fit: cover;
  pointer-events: none;
`;

export const ProjectListItemBackgroundImage = styled(ProjectListItemImageBase)``;

const transitionStatusStyles: { [key in TransitionStatus]: FlattenSimpleInterpolation } = {
  entering: css`
    opacity: 0;
  `,
  entered: css`
    opacity: 0;
  `,
  exiting: css`
    opacity: 1;
    transition: opacity ${BACK_TO_IMAGE_FADE_DURATION / 1000}s ease-out;
  `,
  exited: css`
    opacity: 1;
  `,
  unmounted: css`
    display: none;
  `,
};

export const ProjectListItemImage = styled(ProjectListItemImageBase)<{ $status: TransitionStatus }>`
  ${props =>  transitionStatusStyles[props.$status]}
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
