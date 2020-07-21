// React
import React from 'react';

// React Router
import { NavLink } from 'react-router-dom';

// Bootstrap
import { Button } from 'react-bootstrap';

const LoginButton = () => {
  return (
    <React.Fragment>
      <Button as={NavLink} to='/login'>
        Login
      </Button>
    </React.Fragment>
  );
};

export default LoginButton;
