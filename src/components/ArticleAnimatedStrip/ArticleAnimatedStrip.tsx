import React from 'react';
import styles from './ArticleAnimatedStrip.module.scss';

type ArticleAnimatedStripProps = {
  src?: string;
  alt?: string;
  frames?: number | string;
  reversed?: boolean | string;
  duration?: string;
  classes?: string;
};

export default function ArticleAnimatedStrip({
  src = '',
  alt = '',
  frames = 0,
  reversed = false,
  duration = '',
  classes = '',
}: ArticleAnimatedStripProps) {
  const framesNum = typeof frames === 'string' ? parseInt(frames, 10) : frames;
  const reversedBool = typeof reversed === 'string' ? reversed === 'true' : reversed;

  const containerClasses = [
    styles.container,
    framesNum === 8 ? styles.frames8 : '',
    framesNum === 4 ? styles.frames4 : '',
    reversedBool ? styles.reversed : '',
    classes,
  ].filter((c) => c.length > 0).join(' ');

  const style = duration ? { animationDuration: duration } : undefined;

  return (
    <div className={containerClasses}>
      <img className={styles.frame} src={src} alt={alt} style={style} />
      <img className={`${styles.frame} ${styles.second}`} src={src} alt={alt} style={style} />
    </div>
  );
}

