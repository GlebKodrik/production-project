import { act, fireEvent } from '@testing-library/react';
import { componentRender } from '@/providers/component-render';
import { TUser } from '@/redux-stores/stores/profile/types';
import { ProfileCard } from './profile-card';

let mockOnSubmit: () => void;

beforeEach(async () => {
  mockOnSubmit = jest.fn();
});

type TRenderProfile = {
  profileEditData?: TUser,
  profileData?: TUser,
  isEdit?: boolean,
  onProfileSave?: () => {},
  onButtonCancelEdit?: () => {}
};

const profile: TUser = {
  age: '1',
  avatar:
    'https://sun9-6.userapi.com/impg/9gsrJ2dk2XfGDKj_N5dBl4z-nH0fE0SZQ-gvuw/'
    + 'FppvDrdXSBo.jpg?size=706x690&quality=96&sign=d40f5a2dfdc2b0d5953a5b0bfe9b8f08&type=album',
  city: '2',
  country: 'Armenia',
  currency: 'RUB',
  first: 'ssd',
  lastname: 'gleb',
};

const renderProfile = (props: TRenderProfile) => componentRender({
  component: <ProfileCard
    onInputNameChange={() => {}}
    onInputSurnameChange={() => {}}
    onInputCityChange={() => {}}
    onInputUsernameChange={() => {}}
    onChangeCountryValue={() => {}}
    onChangeCurrencyValue={() => {}}
    onInputAvatarChange={() => {}}
    onInputAgeChange={() => {}}
    onButtonEdit={() => {}}
    onButtonCancelEdit={() => {}}
    onProfileSave={() => {}}
    profileEditData={profile}
    profileData={profile}
    isEdit
    {...props}
  />,
});

describe('Component profile-card', () => {
  test('Edit profile negative case', async () => {
    const { container } = renderProfile({});
    const buttonSubmit = container.querySelector('button[type="submit"]') as HTMLButtonElement;
    const username = container.querySelector('input[name="username"]') as HTMLInputElement;
    expect(mockOnSubmit).not.toHaveBeenCalled();

    await act(async () => {
      fireEvent.click(buttonSubmit);
    });
    expect(buttonSubmit).toBeDisabled();

    await act(async () => {
      fireEvent.change(username, { target: { value: 'test' } });
    });

    expect(buttonSubmit).not.toBeDisabled();
  });

  test('Edit profile positive case', async () => {
    const onProfileSave = jest.fn();
    const newData = { ...profile, username: 'gleb' };
    const { container } = renderProfile({ profileData: newData, profileEditData: newData, onProfileSave });
    const buttonSubmit = container.querySelector('button[type="submit"]') as HTMLButtonElement;
    await act(async () => {
      fireEvent.click(buttonSubmit);
    });
    expect(buttonSubmit).not.toBeDisabled();
    expect(onProfileSave).toHaveBeenCalled();
  });

  test('Canceled edit profile', async () => {
    const onButtonCancelEdit = jest.fn();
    const newData = { ...profile, username: 'gleb' };
    const { container, getByText } = renderProfile({
      profileData: newData,
      profileEditData: newData,
      onButtonCancelEdit,
    });
    const username = container.querySelector('input[name="username"]') as HTMLInputElement;
    expect(username.value).toBe('gleb');
    await act(async () => {
      fireEvent.change(username, { target: { value: 'test' } });
    });
    expect(username.value).toBe('test');
    await act(async () => {
      fireEvent.click(getByText('form.cancelEditProfile'));
    });
    expect(onButtonCancelEdit).toHaveBeenCalled();
    expect(username.value).toBe('gleb');
  });
});
