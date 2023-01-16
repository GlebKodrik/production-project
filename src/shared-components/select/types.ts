export type TSelectProps = {
  className?: string,
  placeholder?: string,
  isReadOnly?: boolean,
  onChange: (value: any) => void,
  value: string,
  options: TOptions[]
};

export type TOptions = {
  value: string,
  content: string
};
