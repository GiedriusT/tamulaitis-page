import React, { useEffect } from 'react';
import * as S from './CodeBlockActivationOverlay.styles';
import { isHoverableDevice } from '../../../theme/utils';
import { CODEBLOCK_ACTIVATION_TEXT, CODEBLOCK_ACTIVATION_TEXT_MOBILE } from '../../../constants';

function CodeBlockActivationOverlay() {
  const [isActivated, setIsActivated] = React.useState(false);
  const isActivatedRef = React.useRef(isActivated);
  const windowScrollYAtActivation = React.useRef(window.scrollY);

  const activate = () => {
    setIsActivated(true);
    isActivatedRef.current = true;
    windowScrollYAtActivation.current = window.scrollY;
  };

  const deactivate = () => {
    setIsActivated(false);
    isActivatedRef.current = false;
  };

  const handleScroll = () => {
    if (isActivatedRef.current && window.scrollY !== windowScrollYAtActivation.current) {
      deactivate();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onActivationOverlayClick = () => {
    activate();
  };

  return (
    <>
      {!isActivated && (
        <S.ActivationOverlay onClick={onActivationOverlayClick}>
          <S.ActivationOverlayText>
            {isHoverableDevice ? CODEBLOCK_ACTIVATION_TEXT : CODEBLOCK_ACTIVATION_TEXT_MOBILE}
          </S.ActivationOverlayText>
        </S.ActivationOverlay>
      )}
      <S.BottomFade $relativeHeight={!isActivated ? 1 : 0} />
    </>
  );
}

export default CodeBlockActivationOverlay;
