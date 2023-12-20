import { PROJECT_ASSETS_PATH } from '../constants';

export const getProjectThumbUrl = (projectSlug: string): string => (
  `/${PROJECT_ASSETS_PATH}/${projectSlug}/${projectSlug}.jpg`
);

export const getProjectVideoUrl = (projectSlug: string): string => (
  `/${PROJECT_ASSETS_PATH}/${projectSlug}/${projectSlug}.mp4`
);
