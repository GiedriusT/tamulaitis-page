import React from 'react';
import styles from './ArticleVersion.module.scss';

type ArticleVersionProps = {
  children?: React.ReactNode;
};

export default function ArticleVersion({ children }: ArticleVersionProps) {
  return <div className={styles.articleVersion}>{children}</div>;
}

