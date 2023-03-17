import * as yup from 'yup';
import { useLanguage } from '@/hooks/use-language';

const searchYupScheme = () => {
  const { translation } = useLanguage();

  return yup.object().shape({
    search: yup.string()
      .required(translation('validationGlobal.required'))
      .max(400, translation('validationGlobal.comment')),
  }).required();
};

export {
  searchYupScheme,
};
