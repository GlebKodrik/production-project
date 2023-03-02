import { EUserRole } from '../../../redux-stores/stores/profile/types';

export type TProps = {
  children: JSX.Element,
  roles?: EUserRole[]
};
