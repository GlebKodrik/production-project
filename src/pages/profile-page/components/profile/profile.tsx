import React from 'react';
import { useLanguage } from 'hooks/use-language';
import { LOCALES } from 'constants/locales';
import { profileReducer } from 'pages/profile-page/components/profile/stores/profile';
import { DynamicModuleLoader, TReducersList } from 'redux-stores/components/dynamic-module-loader';

const reducerList: TReducersList[] = [
  { name: 'profile', reducer: profileReducer },
];

export const Profile = () => {
  const { translation } = useLanguage(LOCALES.PROFILE);
  return (
    <DynamicModuleLoader reducers={reducerList}>
      {translation('profile')}
    </DynamicModuleLoader>
  );
};
