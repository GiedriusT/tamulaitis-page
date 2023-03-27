import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { TransitionStatus } from 'react-transition-group';
import { PAGE_PADDING_HORIZONTAL } from '../../../theme/constants';

export const BACK_TO_IMAGE_FADE_DURATION = 700;

export const ProjectListItemContainer = styled.div`
  width: 100%;
  @media (max-width: 499px) {
    width: calc(100% + 2 * ${PAGE_PADDING_HORIZONTAL});
    margin-left: -${PAGE_PADDING_HORIZONTAL};
    margin-right: -${PAGE_PADDING_HORIZONTAL};
  }
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

const projectListItemLayer = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  object-fit: cover;
  pointer-events: none;
`;

const ProjectListItemImageBase = styled.img`
  ${projectListItemLayer}
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
  ${projectListItemLayer}
`;

export const ProjectListItemComingSoon = styled.div`
  ${projectListItemLayer}
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0);
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  transition: color 0.7s ease-out;
  ${ProjectListItemIternalContainer}:hover & {
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.17s ease-out;
  }
`;

const projectListItemText = css<{ $loading?: boolean }>`
  position: absolute;
  left: 0;
  width: auto;
  margin: 0;
  color: white;
  background-color: ${props => !props.$loading ? 'black' : 'rgba(0, 0, 0, 0.1)'};
`;

export const ProjectListItemTitle = styled.h3<{ $loading?: boolean }>`
  ${projectListItemText}
  /* display: none; */
  line-height: 1;
  bottom: 7%;
  padding: 0.55em 20px;
  transition: bottom 0.6s ease-out;
  ${ProjectListItemIternalContainer}:hover & {
    bottom: 25%;
    transition: bottom 0.17s ease-out;
  }
`;

export const ProjectListItemSubtitle = styled.p<{ $loading?: boolean }>`
  ${projectListItemText}
  bottom: 11%;
  padding: 5px 20px 5px 20px;
  font-size: 0.9rem;
  letter-spacing: 0;
  transform: translate(-100%, 0);
  line-height: 1.5;
  transition: transform 0.6s ease-out;
  ${ProjectListItemIternalContainer}:hover & {
    transform: translate(5%, 0);
    transition: transform 0.17s ease-out;
  }
`;
