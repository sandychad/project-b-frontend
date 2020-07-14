// Form Validation
import * as Yup from 'yup';

// GET formValues and schema from questions
export const getFormSchema = (questions) => {
  let formValues = {};
  let schema = {};

  questions.map(function (question) {
    switch (question.question_type) {
      case 'temp':
        formValues[question.id] = '';
        schema[question.id] = Yup.number().required('Required');
        break;
      case 'options':
      case 'text':
        formValues[question.id] = '';
        schema[question.id] = Yup.string().required('Required');
        break;
      case 'N/A':
      default:
        break;
    }
    return question;
  });

  return {
    formValues,
    schema: Yup.object().shape(schema),
  };
};
