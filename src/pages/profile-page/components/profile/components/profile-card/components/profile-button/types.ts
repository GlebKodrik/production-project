import { TButtonEditOrCancel } from '../../types';

export type TProfileButtonProps = {
  isReadOnly: boolean;
  isLoading: boolean;
  errors: any;
  reset: () => void;
} & TButtonEditOrCancel;
