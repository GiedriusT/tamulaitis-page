import React from 'react';
import styles from './ArticleImageGallery.module.scss';
import { buildClassName } from '../../utils';

type ArticleImageGalleryProps = {
  imagesJson?: string;
};

type GalleryImage = {
  src: string;
  alt: string;
  classes?: string;
};

export default function ArticleImageGallery({ imagesJson = '[]' }: ArticleImageGalleryProps) {
  const images = JSON.parse(imagesJson) as GalleryImage[];

  const galleryClassName = buildClassName(
    styles.gallery,
    images.length === 3 && styles.gallery3,
  );

  return (
    <div className={galleryClassName}>
      {images.map((image, i) => (
        <div className={styles.item} key={i}>
          <img
            src={image.src}
            alt={image.alt}
            className={buildClassName(styles.image, image.classes)}
          />
        </div>
      ))}
    </div>
  );
}

