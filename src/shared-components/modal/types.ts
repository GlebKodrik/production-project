export type TModalProps = {
  className?: string,
  children?: string,
  isOpen: boolean,
  onClose: (isOpen: boolean) => void;
};
