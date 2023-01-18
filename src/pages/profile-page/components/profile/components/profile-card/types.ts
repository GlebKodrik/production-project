import { ReactElement } from 'react';
import { TProfileInput } from './components/profile-inputs/types';

type TProfileCard = {
  onProfileSave: () => void;
  isLoading: boolean;
  spinner?: ReactElement;
};

export type TProfileCardProps = TProfileCard & TProfileInput;
