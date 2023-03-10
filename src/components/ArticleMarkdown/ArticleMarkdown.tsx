import React from 'react';
import { ReactMarkdown, ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkYoutubeVideo from './utils/remarkYoutubeVideo';

const ArticleMarkdown: React.FC<ReactMarkdownOptions> = ({ children }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkYoutubeVideo]} rehypePlugins={[rehypeRaw]} linkTarget="_blank">
      {children}
    </ReactMarkdown>
  );
};

export default ArticleMarkdown;
