import styled from 'styled-components';

export const CodeBlockContainer = styled.div`
  position: relative;
  font-size: 12px;
`;

export type CodeBlockContentProps = {
  $isActivated: boolean;
};

export const CodeBlockContent = styled.div<CodeBlockContentProps>`
  max-height: 600px;
  overflow-y: ${(props) => (props.$isActivated ? 'scroll' : 'hidden')};
`;

export const BottomFade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-image: linear-gradient(to top, ${(props) => props.theme.colors.primaryBackround}, rgba(0, 0, 0, 0));
`;

export const ActivationOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  /* background-color: rgba(0, 0, 0, 0.5); */
`;
