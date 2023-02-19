import React from 'react';
import { ReactMarkdown, ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkCustom from './utils/remarkCustom';

const ArticleMarkdown: React.FC<ReactMarkdownOptions> = ({ children }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkCustom]} rehypePlugins={[rehypeRaw]}>
      {children}
    </ReactMarkdown>
  );
};

export default ArticleMarkdown;
