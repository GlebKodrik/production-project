import * as yup from 'yup';
import { useLanguage } from 'hooks/use-language';

const commentYupScheme = () => {
  const { translation } = useLanguage();

  return yup.object().shape({
    comment: yup.string()
      .required(translation('validationGlobal.required'))
      .max(100, translation('validationGlobal.comment')),
  }).required();
};

export {
  commentYupScheme,
};
