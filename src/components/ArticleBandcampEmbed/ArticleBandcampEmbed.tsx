import React from 'react';
import styles from './ArticleBandcampEmbed.module.scss';

type ArticleBandcampEmbedProps = {
  url?: string;
  embedSrc?: string;
  linkText?: string;
};

export default function ArticleBandcampEmbed({
  url = '',
  embedSrc = '',
  linkText = '',
}: ArticleBandcampEmbedProps) {
  return (
    <div className={styles.bandcampEmbed}>
      <iframe src={embedSrc} seamless>
        <a href={url}>{linkText}</a>
      </iframe>
    </div>
  );
}

