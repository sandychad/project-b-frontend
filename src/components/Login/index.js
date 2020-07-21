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

const containerStyle = {
  marginTop: '7rem',
};

class Login extends Component {
  // Define Prop Types
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };
  render() {
    const { login, isAuthenticated } = this.props;

    const mainPath = '/main';

    if (isAuthenticated) {
      return <Redirect to={mainPath} />;
    }
    return (
      <Container style={containerStyle}>
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
});

export default connect(mapStateToProps, { login })(Login);
