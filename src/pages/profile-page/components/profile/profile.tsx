import React, { useEffect } from 'react';
import { profileActions, profileReducer } from 'pages/profile-page/components/profile/stores/profile';
import { DynamicModuleLoader, TReducersList } from 'redux-stores/components/dynamic-module-loader';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useSelector } from 'react-redux';
import { TCurrency } from 'shared-components/currency/types';
import { TCountry } from 'shared-components/country/types';
import { requestGetProfileData } from './stores/profile/requests/request-get-profile-data';
import { ProfileCard } from './components';
import styles from './styles.modules.scss';
import {
  getIsLoading, getEditForm, getReadOnly, getError,
} from './stores/profile/selectors';

import { saveProfileData } from './stores/profile/requests/save-profile-data';

const reducerList: TReducersList[] = [
  { name: 'profile', reducer: profileReducer },
];

export const Profile = () => {
  const dispatch = useAppDispatch();
  const profileData = useSelector(getEditForm);
  const isLoading = useSelector(getIsLoading);
  const isReadOnly = useSelector(getReadOnly);
  const error = useSelector(getError);
  const onInputNameChange = (value: string) => {
    dispatch(profileActions.updateProfileData({ first: value }));
  };

  const onInputSurnameChange = (value: string) => {
    dispatch(profileActions.updateProfileData({ lastname: value }));
  };

  const onInputAgeChange = (value: string) => {
    dispatch(profileActions.updateProfileData({ age: Number(value) }));
  };

  const onInputCityChange = (value: string) => {
    dispatch(profileActions.updateProfileData({ city: value }));
  };

  const onInputUsernameChange = (value: string) => {
    dispatch(profileActions.updateProfileData({ username: value }));
  };

  const onInputAvatarChange = (value: string) => {
    dispatch(profileActions.updateProfileData({ avatar: value }));
  };

  const onChangeCurrencyValue = (value: TCurrency) => {
    dispatch(profileActions.updateProfileData({ currency: value }));
  };
  const onChangeCountryValue = (value: TCountry) => {
    dispatch(profileActions.updateProfileData({ country: value }));
  };

  const onProfileSave = () => {
    dispatch(saveProfileData());
  };

  useEffect(() => {
    dispatch(requestGetProfileData());
  }, []);

  return (
    <DynamicModuleLoader reducers={reducerList}>
      {!error ? (
        <ProfileCard
          onProfileSave={onProfileSave}
          onInputAgeChange={onInputAgeChange}
          onInputCityChange={onInputCityChange}
          onInputSurnameChange={onInputSurnameChange}
          onInputNameChange={onInputNameChange}
          onInputUsernameChange={onInputUsernameChange}
          onInputAvatarChange={onInputAvatarChange}
          onChangeCurrencyValue={onChangeCurrencyValue}
          onChangeCountryValue={onChangeCountryValue}
          profileData={profileData}
          isLoading={isLoading}
          isReadOnly={isReadOnly}
        />
      )
        : (
          <div className={styles.errorText}>Ошибка загрузки профиля😔</div>)}
    </DynamicModuleLoader>
  );
};
