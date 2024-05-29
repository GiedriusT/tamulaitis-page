import React from 'react';
import S from './ContactButton.module.scss';
import mailIcon from './mail-icon.svg';
import { CONTACT_EMAIL } from '../../constants';
import { getTranslations } from '../../i18n/utils';

type ContactButtonProps = {
  footerVariation?: boolean;
};

function ContactButton({ footerVariation }: ContactButtonProps) {
  const t = getTranslations();

  const buttonClasses = [S.contactButton];
  if (footerVariation) buttonClasses.push(S.footerVariation);

  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className={buttonClasses.join(' ')} title={t('contactButton.title')}>
      <img className={S.screenIcon} src={mailIcon.src} alt={t('contactButton.text')} />
      <span className={S.screenText}>{t('contactButton.text')}</span>
      <span className={S.printText}>{CONTACT_EMAIL}</span>
    </a>
  );
}

export default ContactButton;
