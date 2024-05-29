import {
  MY_NAME,
  WHAT_IS_THIS_PAGE,
  WHO_I_AM,
} from '../constants';
import { getTranslations } from '../i18n/utils';
import type { Project } from '../types';
import { getProjectCanonicalUrl, getProjectThumbUrl } from './projects';
import { absoluteUrl } from './url';

export type PageMetadata = {
  title: string;
  description: string;
  ogImage: string;
  canonicalUrl: string;
};

const t = getTranslations();

const concatenateTitle = (segments: string[]) => segments.join(' - ');

export const getProjectPageTitle = (project: Project) => (
  `${concatenateTitle([project.title, project.subtitle])}`
);

export const getIndexPageMetadata = (): PageMetadata => ({
  title: concatenateTitle([MY_NAME, WHAT_IS_THIS_PAGE]),
  description: WHO_I_AM,
  ogImage: '/tamulaitis-facebook-image.webp',
  canonicalUrl: absoluteUrl(''),
});

export const getProjectPageMetadata = (project: Project): PageMetadata => ({
  title: getProjectPageTitle(project),
  description: project.description,
  ogImage: getProjectThumbUrl(project.slug),
  canonicalUrl: getProjectCanonicalUrl(project),
});

export const get404PageMetadata = (): PageMetadata => ({
  title: t('notFoundPage.title'),
  description: '',
  ogImage: '/tamulaitis-facebook-image.webp',
  canonicalUrl: absoluteUrl('/404'),
});
