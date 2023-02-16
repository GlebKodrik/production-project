import { ReactNode } from 'react';

export type TDropDown = {
  disabled?: boolean,
  content: ReactNode,
  onClick?: () => void,
  href?: string
};

export type TProps = {
  className?: string,
  items: TDropDown[],
  trigger: ReactNode,
};
