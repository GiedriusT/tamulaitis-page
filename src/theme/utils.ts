import { HOVERABLE_DEVICE } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const isHoverableDevice = window.matchMedia(HOVERABLE_DEVICE).matches;
