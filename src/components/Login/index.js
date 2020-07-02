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

// Bootstraip
import { Container } from 'react-bootstrap';

// Local Components
import LoginForm from './LoginForm';

class Login extends Component {
  // Define Prop Types
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/main' />;
    }
    return (
      <Container
        style={{
          marginTop: '7rem',
        }}
      >
        <Formik
          validationSchema={schema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            this.props.login(values.email, values.password);
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
});

export default connect(mapStateToProps, { login })(Login);
