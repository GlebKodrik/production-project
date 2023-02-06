import { TColor } from '../../types/color';

export type TProps = {
  tabs: TTabs[],
  onClick: (name: string) => void,
  className?: string,
  color?: TColor,
  activeTab?: string
};

export type TTabs = {
  name: string,
  content: string
};
