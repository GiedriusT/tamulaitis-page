import React from 'react';
import styles from './ArticleImage.module.scss';

type ArticleImageProps = {
  src?: string;
  alt?: string;
  classes?: string;
};

export default function ArticleImage({ src = '', alt = '', classes = '' }: ArticleImageProps) {
  const className = [styles.image, classes].filter((c) => c.length > 0).join(' ');
  return <img src={src} alt={alt} className={className} />;
}

