import React, { Component } from 'react';
import {
  Navbar,
  SplitButton,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';

const containerStyle = {
  width: 'auto',
  justifyContent: 'center',
};

class Header extends Component {
  render() {
    return (
      <Navbar bg='primary' variant='dark' expand='sm' fixed='top'>
        <Navbar.Brand>ProjectB</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='justify-content-end'>
          <SplitButton alignRight variant='primary' title='Org Name'>
            <Container style={containerStyle}>
              <Form inline>
                <FormControl
                  type='text'
                  placeholder='City'
                  className='mr-sm-2'
                />
                <Button variant='outline-success'>Search</Button>
              </Form>
            </Container>
          </SplitButton>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
