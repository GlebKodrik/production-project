import { UseFormReset } from 'react-hook-form/dist/types/form';

export type TProps = {
  onSubmit: (value: string, { reset }: TOption) => void,
  isShowError?: boolean,
  isLoading?: boolean
};

export type TOption = {
  reset: UseFormReset<TInputValue>
};

export type TInputValue = TComment;

export type TComment = {
  comment: string
};
