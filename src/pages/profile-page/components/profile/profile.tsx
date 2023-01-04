import React, { useEffect } from 'react';
import { profileReducer } from 'pages/profile-page/components/profile/stores/profile';
import { DynamicModuleLoader, TReducersList } from 'redux-stores/components/dynamic-module-loader';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { requestGetProfileData } from './stores/profile/requests/request-get-profile-data';
import { ProfileCard } from './components';

const reducerList: TReducersList[] = [
  { name: 'profile', reducer: profileReducer },
];

export const Profile = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestGetProfileData());
  }, []);

  return (
    <DynamicModuleLoader reducers={reducerList}>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};
