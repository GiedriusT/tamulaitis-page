import { ProjectMedia } from '../types';
import projectsMedia from './media';

const dashToCamel = (str: string): string  => {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
};

export const fetchArticle = async (articleUrl: string): Promise<string> => {
  const result = await fetch(articleUrl);
  const article = await result.text();
  return article;
};

export const getProjectMedia = (projectSlug: string): ProjectMedia => {
  const keyName = dashToCamel(projectSlug);
  return projectsMedia[keyName];
};
