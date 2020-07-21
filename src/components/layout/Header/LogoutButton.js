// React
import React from 'react';

// Bootstrap
import { Button } from 'react-bootstrap';

const LogoutButton = (props) => {
  const { handleLogout } = props;
  return (
    <React.Fragment>
      <Button onClick={handleLogout}>Logout</Button>
    </React.Fragment>
  );
};

export default LogoutButton;
