import { SITE_URL } from '../constants';

export const absoluteUrl = (relativeUrl: string) => `${SITE_URL}${relativeUrl}`;
