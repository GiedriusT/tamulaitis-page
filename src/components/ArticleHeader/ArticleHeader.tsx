import React from 'react';
import { extractTextContent } from '../../utils/astro';
import styles from './ArticleHeader.module.scss';

interface ArticleHeaderProps {
  children?: React.ReactNode;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({children}) => {  
  const textContent = extractTextContent(children);
  
  if (textContent && textContent.includes(' - ')) {
    const segments = textContent.split(' - ');
    const title = segments.slice(0, -1).join(' - ');
    const subtitle = segments.slice(-1)[0];
    
    return (
      <h1>
        {title}
        <span className={styles.separator}> - </span>
        <span className={styles.subtitle}>{subtitle}</span>
      </h1>
    );
  }
  
  console.warn('ArticleHeader: No separator found in text content, something is wrong! Text: ', textContent);
  return <h1>{children}</h1>;
};

export default ArticleHeader;
