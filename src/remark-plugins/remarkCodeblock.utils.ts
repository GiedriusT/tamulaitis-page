import { CORS_FETCH_URL, supportedExtensions } from './remarkCodeblock.config';

export const getRemoteCodeLink = (children?: string): string => {
  if (!children) return '';

  const firstLine = children.toString().split('\n')[0];
  const supportedExtensionString = Object.keys(supportedExtensions).join('|');
  const linkRegex = new RegExp(`\\bhttps?://[^\\s]+(?:\\.(${supportedExtensionString}))\\b`);
  const match = firstLine.match(linkRegex);

  return match ? match[0] : '';
};

export const isRemoteCodeUrl = (url: string): boolean => {
  const urlWithoutHash = url.split('#')[0];
  const extension = urlWithoutHash.split('.').pop() || '';
  return Object.keys(supportedExtensions).includes(extension);
};

export const isGitHubUrl = (url: string): boolean => {
  try {
    const urlParts = new URL(url);
    return urlParts.hostname === 'github.com' && urlParts.protocol === 'https:';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return false;
  }
};

export const shouldBeEmbedded = (url: string): boolean => {
  const parts = url.split('#');
  return parts.length > 1 && parts[parts.length - 1] === 'embed';
};

export const getProgrammingLanguage = (url: string): string => {
  const extension = url.split('.').pop() || '';
  return supportedExtensions[extension] || '';
};

export const convertGitHubUrl = (gitHubUrl: string): string => {
  if (!isGitHubUrl(gitHubUrl)) return gitHubUrl;

  const url = gitHubUrl.replace('https://github.com', 'https://raw.githubusercontent.com');
  return url.replace('/blob/', '/');
};

export const processRemoteCodeUrl = (url: string): string => {
  let finalUrl = url;

  if (isGitHubUrl(url)) {
    finalUrl = convertGitHubUrl(url);
  }
  return `${CORS_FETCH_URL}${finalUrl}`;
};
