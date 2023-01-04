import React, { useEffect, useState } from 'react';
import { useLanguage } from 'hooks/use-language';
import { LOCALES } from 'constants/locales';
import { Input } from 'shared-components/input';
import { Button } from 'shared-components/button';
import { useSelector } from 'react-redux';
import styles from './prodile-card.module.scss';
import { getProfileData } from '../stores/profile/selectors/getProfileData';

export const ProfileCard = () => {
  const profileData = useSelector(getProfileData);
  const { translation } = useLanguage(LOCALES.PROFILE);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const onInputNameChange = (value: string) => {
    setName(value);
  };
  const onInputSurnameChange = (value: string) => {
    setSurname(value);
  };

  useEffect(() => {
    if (profileData) {
      const { first, lastname } = profileData;
      setName(first);
      setSurname(lastname);
    }
  }, [profileData]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{translation('title')}</h1>
      <Input
        value={name}
        onChange={onInputNameChange}
        placeholder={translation('form.name')}
      />
      <Input
        value={surname}
        onChange={onInputSurnameChange}
        placeholder={translation('form.surname')}
      />
      <div className={styles.wrapperButton}>
        <Button variant="outline">{translation('form.editProfile')}</Button>
      </div>
    </div>
  );
};
