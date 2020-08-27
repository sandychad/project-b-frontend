// React
import React, { useEffect } from 'react';

// React Router
import { Redirect, useParams } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
import store from '../../redux/store';
import { schoolLogin, schoolValidateHash } from '../../redux/actions/auth';
import { setPerson } from '../../redux/actions/survey';

// Form Validation
import { Formik } from 'formik';

// Bootstrap
import { Container } from 'react-bootstrap';

// Local Components
import SchoolLoginForm from './SchoolLoginForm';
import * as paths from '../../utils/paths';

const containerStyle = {
  marginTop: '7rem',
};

export default function SchoolLogin() {
  const { user_hash } = useParams();
  const hashValid = useSelector((state) => state.auth.hashValid);
  const person = useSelector((state) => state.auth.user);

  useEffect(() => {
    store.dispatch(schoolValidateHash(user_hash));
  }, [user_hash]);

  if (person) {
    store.dispatch(setPerson(person));
    return <Redirect to={paths.SURVEY_QUESTIONS_PATH} />;
  }

  if (hashValid) {
    return (
      <Container style={containerStyle}>
        <Formik
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const { studentID } = values;
            setSubmitting(true);
            store.dispatch(schoolLogin(user_hash, studentID));
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
      <Container style={containerStyle}>
        <h2>Invalid user code</h2>
      </Container>
    );
  }
}