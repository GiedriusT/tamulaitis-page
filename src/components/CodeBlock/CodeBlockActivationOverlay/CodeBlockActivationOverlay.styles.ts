import styled from 'styled-components';
import { HOVERABLE_DEVICE } from '../../../theme';

export const ActivationOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
`;

export const BottomFade = styled.div<{ $relativeHeight: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.$relativeHeight * 20}%;
  transition: height 0.27s ease-out;
  background-image: linear-gradient(to top, ${(props) => props.theme.colors.primaryBackround}, rgba(0, 0, 0, 0));
  pointer-events: none;
`;

export const ActivationOverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 10px));
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.regularFontSize};
  text-align: center;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primaryBackround};
  transition: top 0.27s ease-out;

  @media ${HOVERABLE_DEVICE} {
    top: 120%;

    ${ActivationOverlay}:hover & {
      top: 50%;
      transition: top 0.27s ease-out;
    }
  }
`;
