import { MY_NAME, TAGLINE } from '../constants';
import { Project } from '../types';

const concatenateTitle = (segments: string[]) => segments.join(' - ');

export const getIndexPageTitle = () => concatenateTitle([MY_NAME, TAGLINE]);
export const getProjectPageTitle = (project: Project) => concatenateTitle([project.title, project.subtitle, MY_NAME]);
export const getSecretPageTitle = () => concatenateTitle(['This is a secret page!', MY_NAME]);
