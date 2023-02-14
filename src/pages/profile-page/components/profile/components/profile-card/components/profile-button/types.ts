import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { TButtonEditOrCancel } from '../../types';
import { TInputValue } from '../profile-inputs/types';

export type TProfileButtonProps = {
  isReadOnly: boolean;
  isLoading: boolean;
  errors: FieldErrors<TInputValue>;
  reset: () => void;
} & TButtonEditOrCancel;
