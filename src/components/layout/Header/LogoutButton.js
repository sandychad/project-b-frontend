// React
import React, { Component, Fragment } from 'react';

// React Bootstrap
import { Button } from 'react-bootstrap';

export class LogoutButton extends Component {
  render() {
    const { handleLogout } = this.props;

    return (
      <Fragment>
        <Button onClick={handleLogout}>Logout</Button>
      </Fragment>
    );
  }
}

export default LogoutButton;
