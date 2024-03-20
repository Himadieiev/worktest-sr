import * as Yup from 'yup';

export const validateSchema = Yup.object().shape({
  discord: Yup.string()
    .required('Wrong discord')
    .min(2, 'Min 2 characters')
    .max(20, 'Max 20 characters')
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^@([a-zA-Z0-9\_]{2,31})$/,
      'Must start with @'
    ),
  wallet: Yup.string()
    .required('Wrong address')
    .min(10, 'Min 10 characters')
    .max(30, 'Max 30 characters')
    .matches(/^[a-zA-Z0-9]+$/, 'Only latin and numbers')
    .trim(),
});
