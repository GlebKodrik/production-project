type WhenExistIsOpen = {
  onClose: Function,
  onSubmit: (data: any) => void,
  onChangeFeedback: (feedback: string) => void,
  feedback: string,
};

type BaseType = {
  className?: string,
  title?: string,
  onSelect: (number: number) => void,
  selectStar: number,
  isOpen?: boolean,
};

type WhenExist = {
  isOpen: true,
  onClose: Function,
  onSubmit: (data: any) => void,
  onChangeFeedback: (feedback: string) => void,
  feedback: string,
} & BaseType;

type WhenClosed = {
  isOpen?: false
} & BaseType & WhenExistIsOpen;

export type TProps = WhenClosed | WhenExist;
