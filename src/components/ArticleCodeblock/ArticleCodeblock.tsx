import React from 'react';
import styles from './ArticleCodeblock.module.scss';
import { getTranslations } from '../../i18n/utils';

/*
Server-rendered component (no React hydration).

Interactivity is handled by `public/codeblock.js`, which relies on:
- `data-codeblock`: codeblock root marker
- `data-codeblock-overlay`: click target that enables scrolling
- `data-codeblock-content`: element that receives the activation class
- `data-activated-class`: CSS-module class name to toggle on the content
It will also deactivate when the page scrolls outside the codeblock.
*/

type ArticleCodeblockProps = {
  codeHtml?: string;
  codeblockId?: string;
};

export default function ArticleCodeblock({
  codeHtml = '',
  codeblockId = '',
}: ArticleCodeblockProps) {
  const t = getTranslations();
  const activationText = t('codeblock.activationText');
  const activationTextMobile = t('codeblock.activationTextMobile');

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css"
      />
      <div className={styles.container} data-codeblock data-codeblock-id={codeblockId}>
        <div className={styles.content} data-codeblock-content data-activated-class={styles.activated}>
          <div className={styles.overlay} data-codeblock-overlay>
            <div className={styles.overlayText}>
              <span className={styles.text}>{activationText}</span>
              <span className={styles.textMobile}>{activationTextMobile}</span>
            </div>
          </div>
          <pre><code dangerouslySetInnerHTML={{ __html: codeHtml }} /></pre>
          <div className={styles.bottomFade} />
        </div>
      </div>
      <script src="/codeblock.js" defer />
    </>
  );
}

