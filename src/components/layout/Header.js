// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOrgName } from '../../redux/actions/organization';

// React Bootstrap
import {
  Navbar,
  SplitButton,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';

// Local Styles
const containerStyle = {
  width: 'auto',
  justifyContent: 'center',
};

// Component
class Header extends Component {
  static propTypes = {
    getOrgName: PropTypes.func.isRequired,
    org_name: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.props.getOrgName();
  }

  render() {
    const { org_name } = this.props;
    return (
      <Navbar bg='primary' variant='dark' expand='sm' fixed='top'>
        <Navbar.Brand>SymScreen</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='justify-content-end'>
          <SplitButton alignRight variant='primary' title={org_name}>
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

const mapStateToProps = (state) => ({
  org_name: state.organization.org_name,
});

export default connect(mapStateToProps, { getOrgName })(Header);
