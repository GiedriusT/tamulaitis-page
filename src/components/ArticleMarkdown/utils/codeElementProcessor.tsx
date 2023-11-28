import React from 'react';
import CodeBlock from '../../CodeBlock/CodeBlock';
import { MarkdownElementProcessorProps } from './common';

const codeElementProcesor = (props: MarkdownElementProcessorProps): JSX.Element => {
  const { className, children: codeChildren } = props;

  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : '';
  return (
    <CodeBlock language={language}>
      {codeChildren}
    </CodeBlock>
  );
};

export default codeElementProcesor;
