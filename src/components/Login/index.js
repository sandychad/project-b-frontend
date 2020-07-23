// React
import React, { Component } from 'react';

// React Router
import { Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth';

// Form Validation
import { Formik } from 'formik';
import schema from './validation';

// Bootstrap
import { Container } from 'react-bootstrap';

// Local Components
import LoginForm from './LoginForm';
import ErrorMessage from '../common/ErrorMessage';

const containerStyle = {
  marginTop: '7rem',
};

class Login extends Component {
  // Define Prop Types
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
  };
  render() {
    const { login, isAuthenticated, errors } = this.props;

    const dashboardPath = '/dashboard';

    if (isAuthenticated) {
      return <Redirect to={dashboardPath} />;
    }
    return (
      <Container style={containerStyle}>
        {errors.permission_error ? (
          <ErrorMessage message={errors.permission_error} />
        ) : null}
        {errors.non_field_errors ? (
          <ErrorMessage message={errors.non_field_errors} />
        ) : null}
        <h2 className='text-center mt-4'>Login</h2>
        <Formik
          validationSchema={schema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const { email, password } = values;
            setSubmitting(true);
            login(email, password);
            resetForm();
            setSubmitting(false);
          }}
          initialValues={{
            email: '',
            password: '',
          }}
        >
          {(formik) => <LoginForm formik={formik} />}
        </Formik>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors,
});

export default connect(mapStateToProps, { login })(Login);
