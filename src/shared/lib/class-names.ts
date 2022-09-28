type TMods = Record<string, boolean>;

const classNames = (
  className: string,
  mods: TMods = {},
  additionalClasses: string[] = [],
  // eslint-disable-next-line max-params
): string => [
  className,
  ...additionalClasses,
  ...Object.keys(mods).filter((key) => mods[key]),
].join(' ');

export default classNames;
