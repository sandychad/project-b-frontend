import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().label('Email').email().required('Required'),
  password: Yup.string()
    .label('Password')
    .matches(
      /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
      'Must contain 8 characters and at least one number, one letter, and one special character '
    )
    .required('Required'),
});

export default schema;
