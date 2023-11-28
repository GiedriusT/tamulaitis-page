import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { defaultStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as S from './CodeBlock.styles';
import CodeBlockActivationOverlay from './CodeBlockActivationOverlay/CodeBlockActivationOverlay';
import { CODEBLOCK_LOADING_TEXT } from '../../constants';
import { getProgrammingLanguage, getRemoteCodeLink, processRemoteCodeUrl } from './utils';

type CodeBlockProps = {
  children: string | React.ReactNode
  language?: string
};

function CodeBlock({ children, language }: CodeBlockProps) {
  const [code, setCode] = useState(CODEBLOCK_LOADING_TEXT);

  const remoteCodeUrl = getRemoteCodeLink(children?.toString());
  const overrideLanguage = remoteCodeUrl ? getProgrammingLanguage(remoteCodeUrl) : language;

  useEffect(() => {
    if (!children) return;

    const isRemoteCode = remoteCodeUrl !== '';

    if (!isRemoteCode) {
      setCode(children?.toString());
      return;
    }

    (async () => {
      const response = await fetch(processRemoteCodeUrl(remoteCodeUrl));
      const text = await response.text();
      setCode(text);
    })();
  }, [children, remoteCodeUrl]);

  return (
    <S.CodeBlockContainer>
      <S.CodeBlockContent>
        <SyntaxHighlighter style={defaultStyle} showLineNumbers language={overrideLanguage}>
          {code}
        </SyntaxHighlighter>
      </S.CodeBlockContent>
      <CodeBlockActivationOverlay />
    </S.CodeBlockContainer>
  );
}

export default CodeBlock;
