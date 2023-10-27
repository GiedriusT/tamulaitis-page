import { MY_NAME, SECRET_PAGE_TITLE, TAGLINE } from '../constants';
import { Project } from '../types';

const concatenateTitle = (segments: string[]) => segments.join(' - ');

export const getIndexPageTitle = () => concatenateTitle([MY_NAME, TAGLINE]);
export const getProjectPageTitle = (project: Project) => (
  concatenateTitle([project.title, project.subtitle, MY_NAME])
);
export const getSecretPageTitle = () => concatenateTitle([SECRET_PAGE_TITLE, MY_NAME]);
