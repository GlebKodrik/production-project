import * as yup from 'yup';

const commentYupScheme = () => yup.object().shape({
  comment: yup.string()
    .required()
    .max(100),
}).required();

export {
  commentYupScheme,
};
