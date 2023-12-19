import type { Options, UserOptions } from './types';

export const defaultOptions: Options = {
  outDir: 'dist',
};

export function resolveOptions(userOptions: UserOptions): Options {
  return { ...defaultOptions, ...userOptions };
}
