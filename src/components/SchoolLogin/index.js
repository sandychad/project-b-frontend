// React
import React from 'react';

// React Router
import { useParams } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
import { schoolLogin, schoolValidateHash } from '../../redux/actions/auth';

// Bootstrap
import { Container } from 'react-bootstrap';

// Local Components
import SchoolLoginForm from './SchoolLoginForm';
import ErrorMessage from '../common/ErrorMessage';
import * as paths from '../../utils/paths';

const containerStyle = {
  marginTop: '7rem',
};

export default function SchoolLogin() {
  const { user_hash } = useParams();

  return (
    <Container style={containerStyle}>
      <SchoolLoginForm user_hash={user_hash} />
    </Container>
  );
}
