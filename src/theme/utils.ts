import { HOVERABLE_DEVICE } from './constants';

export const isHoverableDevice = window.matchMedia(HOVERABLE_DEVICE).matches;
