export type TModalProps = {
  className?: string,
  children?: string,
  open: boolean,
  onClose: (isOpen: boolean) => void;
};
