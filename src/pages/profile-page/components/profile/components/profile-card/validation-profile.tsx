import * as yup from 'yup';
import { LOCALES } from 'constants/locales';
import { useLanguage } from 'hooks/use-language';

const profileYupScheme = () => {
  const { translation } = useLanguage(LOCALES.PROFILE_PAGE);

  return yup.object().shape({
    first: yup.string()
      .required(translation('validation.required'))
      .max(20, translation('validation.firstMax')),
    age: yup.string()
      .required(translation('validation.required'))
      .matches(/^[0-9]+$/, translation('validation.ageOnlyNumber'))
      .max(2, translation('validation.ageMax')),
    lastname: yup.string()
      .required(translation('validation.required'))
      .max(20, translation('validation.lastname')),
    city: yup.string().required(translation('validation.required'))
      .max(20, translation('validation.city')),
    username: yup
      .string()
      .required(translation('validation.required'))
      .max(20, translation('validation.username')),
    avatar: yup.string().url(translation('validation.url')),
  }).required();
};

export {
  profileYupScheme,
};
