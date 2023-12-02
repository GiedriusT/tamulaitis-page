import { CORS_FETCH_URL, supportedExtensions } from './config';

export const getRemoteCodeLink = (children?: string): string => {
  if (!children) return '';

  const firstLine = children.toString().split('\n')[0];
  const supportedExtensionString = Object.keys(supportedExtensions).join('|');
  const linkRegex = new RegExp(`\\bhttps?://[^\\s]+(?:\\.(${supportedExtensionString}))\\b`);
  const match = firstLine.match(linkRegex);

  return match ? match[0] : '';
};

export const getProgrammingLanguage = (url: string): string => {
  const extension = url.split('.').pop() || '';
  return supportedExtensions[extension] || '';
};

export const convertGitHubUrl = (gitHubUrl: string): string => {
  if (gitHubUrl.indexOf('https://github.com') === -1) return gitHubUrl;

  const url = gitHubUrl.replace('https://github.com', 'https://raw.githubusercontent.com');
  return url.replace('/blob/', '/');
};

export const processRemoteCodeUrl = (url: string): string => {
  let finalUrl = url;
  if (url.indexOf('https://github.com') === 0) {
    finalUrl = convertGitHubUrl(url);
  }
  return `${CORS_FETCH_URL}${finalUrl}`;
};
