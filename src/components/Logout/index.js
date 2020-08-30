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
import LoginoutForm from './Logout';
import Loading from '../common/Loading';
import ErrorMessage from '../common/ErrorMessage';
import * as paths from '../../utils/paths';

const containerStyle = {
  marginTop: '7rem',
};

export default function SchoolLogout() {}
