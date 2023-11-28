import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { defaultStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as S from './CodeBlock.styles';
import CodeBlockActivationOverlay from './CodeBlockActivationOverlay/CodeBlockActivationOverlay';

type CodeBlockProps = {
  children: string | React.ReactNode
  language?: string
};

function CodeBlock({ children, language }: CodeBlockProps) {
  return (
    <S.CodeBlockContainer>
      <S.CodeBlockContent>
        <SyntaxHighlighter style={defaultStyle} showLineNumbers language={language}>
          {children as string /* TODO: this is ugly, need to solve nicer */}
        </SyntaxHighlighter>
      </S.CodeBlockContent>
      <CodeBlockActivationOverlay />
    </S.CodeBlockContainer>
  );
}

export default CodeBlock;
