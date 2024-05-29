import { SITE_URL } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const absoluteUrl = (relativeUrl: string) => `${SITE_URL}${relativeUrl}`;
