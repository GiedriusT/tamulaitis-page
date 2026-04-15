import React from 'react';
import styles from './ArticleSpotifyEmbed.module.scss';

type ArticleSpotifyEmbedProps = {
  url?: string;
};

export default function ArticleSpotifyEmbed({ url = '' }: ArticleSpotifyEmbedProps) {
  const embedUrl = url.replace('https://open.spotify.com/', 'https://open.spotify.com/embed/');

  return (
    <div className={styles.spotifyEmbed}>
      <iframe
        style={{ borderRadius: 12 }}
        src={embedUrl}
        width="100%"
        height="472"
        frameBorder={0}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}

