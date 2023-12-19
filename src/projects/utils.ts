import projectsMedia from './media';

const dashToCamel = (str: string): string => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

export const fetchArticle = async (articleUrl: string): Promise<string> => {
  const result = await fetch(articleUrl);
  const article = await result.text();
  return article;
};

export const getProjectArticleUrl = (projectSlug: string): string => {
  const keyName = dashToCamel(projectSlug);
  return projectsMedia[keyName]?.articleUrl;
};
