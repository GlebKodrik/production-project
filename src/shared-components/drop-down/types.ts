import { ReactNode } from 'react';

export type TDropDownItem = {
  disabled?: boolean,
  content: ReactNode,
  onClick?: () => void,
  href?: string
};

export type TProps = {
  className?: string,
  items: TDropDownItem[],
  trigger: ReactNode,
};
