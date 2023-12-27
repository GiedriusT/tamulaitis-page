import {
  MY_NAME,
  SECRET_PAGE_TITLE,
  SITE_URL,
  TAGLINE,
} from '../constants';
import { Project } from '../types';

const concatenateTitle = (segments: string[]) => segments.join(' - ');

export const getIndexPageTitle = () => concatenateTitle([MY_NAME, TAGLINE]);

export const getProjectPageTitle = (project: Project) => (
  `${concatenateTitle([project.title, project.subtitle])} (by ${MY_NAME})`
);

export const getProjectPageCanonicalUrl = (project: Project) => (
  `${SITE_URL}/project/${project.slug}`
);

export const getSecretPageTitle = () => concatenateTitle([SECRET_PAGE_TITLE, MY_NAME]);
