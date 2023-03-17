import * as yup from 'yup';
import { useLanguage } from '@/hooks/use-language';

const authYupScheme = () => {
  const { translation } = useLanguage();

  return yup.object().shape({
    username: yup.string()
      .required(translation('validationGlobal.required'))
      .max(20, translation('auth.form.validation.maxValue')),
    password: yup.string()
      .required(translation('validationGlobal.required'))
      .max(20, translation('auth.form.validation.maxValue')),
  }).required();
};

export {
  authYupScheme,
};
