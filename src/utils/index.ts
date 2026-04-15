export const buildClassName = (...classes: Array<string | false | null | undefined>) => (
  classes.filter((c) => typeof c === 'string' && c.length > 0).join(' ')
);

