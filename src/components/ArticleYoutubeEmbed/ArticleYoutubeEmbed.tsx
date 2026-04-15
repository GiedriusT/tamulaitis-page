import React from 'react';
import styles from './ArticleYoutubeEmbed.module.scss';

type ArticleYoutubeEmbedProps = {
  url?: string;
  title?: string;
  aspectW?: string | number;
  aspectH?: string | number;
};

export default function ArticleYoutubeEmbed({
  url = '',
  title = 'YouTube Video Player',
  aspectW,
  aspectH,
}: ArticleYoutubeEmbedProps) {
  const watchUrl = url;
  const embedUrl = url.replace('watch?v=', 'embed/');

  const w = typeof aspectW === 'string' ? parseInt(aspectW, 10) : aspectW;
  const h = typeof aspectH === 'string' ? parseInt(aspectH, 10) : aspectH;

  return (
    <div className={styles.youtubeEmbed}>
      <iframe
        src={embedUrl}
        title={title}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={w && h ? { aspectRatio: `${w} / ${h}` } : undefined}
      />
      <span className={styles.youtubeEmbedPrintText}>
        <strong>{title}</strong>: {watchUrl}
      </span>
    </div>
  );
}

