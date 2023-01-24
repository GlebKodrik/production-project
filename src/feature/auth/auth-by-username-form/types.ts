export type TProps = {
  isOpen?: boolean
};

type TInputName = 'username' | 'password';
export type TInputValue = Partial<Record<TInputName, string>>;
