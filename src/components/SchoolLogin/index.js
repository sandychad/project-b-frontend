// React
import React, { useEffect } from 'react';

// React Router
import { Redirect, useParams } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { schoolLogin, schoolValidateHash } from '../../redux/actions/auth';
import { setPerson } from '../../redux/actions/survey';

// Form Validation
import { Formik } from 'formik';

// Bootstrap
import { Container } from 'react-bootstrap';

// Local Components
import SchoolLoginForm from './SchoolLoginForm';
import Loading from '../common/Loading';
import ErrorMessage from '../common/ErrorMessage';
import * as paths from '../../utils/paths';

const containerStyle = {
  marginTop: '7rem',
};

export default function SchoolLogin() {
  const { user_hash } = useParams();
  const dispatch = useDispatch();
  const hashValid = useSelector((state) => state.auth.hashValid);
  const hashName = useSelector((state) => state.auth.hashName);
  const hashLoading = useSelector((state) => state.auth.hashLoading);
  const errors = useSelector((state) => state.auth.errors);
  const person = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(schoolValidateHash(user_hash));
  }, [dispatch, user_hash]);

  if (person) {
    dispatch(setPerson(person));
    return <Redirect to={paths.SURVEY_QUESTIONS_PATH} />;
  }
  if (hashLoading) {
    return (
      <Container fluid style={containerStyle}>
        <Loading />
      </Container>
    );
  } else {
    if (hashValid) {
      return (
        <Container fluid style={containerStyle}>
          <h2 className='text-center mt-4'>Hello, {hashName}</h2>
          <br />
          {errors.permission_error ? (
            <ErrorMessage message={errors.permission_error} />
          ) : null}
          <br />
          <Formik
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const { studentID } = values;
              setSubmitting(true);
              dispatch(schoolLogin(user_hash, studentID));
              resetForm();
              setSubmitting(false);
            }}
            initialValues={{
              studentID: '',
            }}
          >
            {(formik) => (
              <SchoolLoginForm user_hash={user_hash} formik={formik} />
            )}
          </Formik>
        </Container>
      );
    } else {
      return (
        <Container style={containerStyle} className='text-center'>
          <h2>{errors.message}</h2>
        </Container>
      );
    }
  }
}
