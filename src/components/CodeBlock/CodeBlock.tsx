import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { defaultStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as S from './CodeBlock.styles';

type CodeBlockProps = {
  children: string | React.ReactNode
};

function CodeBlock({ children }: CodeBlockProps) {
  const [isActivated, setIsActivated] = React.useState(false);

  const onActivationOverlayClick = () => {
    if (isActivated) {
      return;
    }

    setIsActivated(true);
  };

  return (
    <S.CodeBlockContainer>
      <S.CodeBlockContent $isActivated={isActivated}>
        <SyntaxHighlighter style={defaultStyle} showLineNumbers>
          {children as string /* TODO: this is ugly, need to solve nicer */}
        </SyntaxHighlighter>
      </S.CodeBlockContent>
      <S.BottomFade />
      {!isActivated && <S.ActivationOverlay onClick={onActivationOverlayClick} />}
    </S.CodeBlockContainer>
  );
}

export default CodeBlock;
