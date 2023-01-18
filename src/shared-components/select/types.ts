export type TSelectProps = {
  className?: string,
  placeholder?: string,
  onChange: (value: any) => void,
  value: string,
  options: TOptions[],
  name?: string
  disabled?: boolean
};

export type TOptions = {
  value: string,
  content: string
};
