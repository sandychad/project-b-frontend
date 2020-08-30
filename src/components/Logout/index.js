// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth';

// Bootstrap
import { Container } from 'react-bootstrap';

const containerStyle = {
  marginTop: '7rem',
};

export default function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Container style={containerStyle} className='text-center'>
      <h2>Thank you for submitting your SymScreen survey!</h2>
      <h5>You many now close the browser window</h5>
    </Container>
  );
}
