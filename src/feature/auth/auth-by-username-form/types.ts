import { TColor } from 'shared-components/types/color';

export type TProps = {
  color?: TColor
};

type TInputName = 'username' | 'password';
export type TInputValue = Partial<Record<TInputName, string>>;
