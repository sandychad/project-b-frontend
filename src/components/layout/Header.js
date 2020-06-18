// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOrgName } from '../../redux/actions/organization';
import { getPeople } from '../../redux/actions/people';

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
  constructor(props) {
    super(props);
    this.state = {
      searchCity: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static propTypes = {
    getOrgName: PropTypes.func.isRequired,
    org_name: PropTypes.string.isRequired,
    getPeople: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getOrgName();
  }

  handleChange(event) {
    this.setState({ searchCity: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getPeople(this.state.searchCity);
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
              <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                  <FormControl
                    type='text'
                    value={this.state.searchCity}
                    onChange={this.handleChange}
                    placeholder='City'
                    className='mr-sm-2'
                  />
                </Form.Row>
                <Form.Row>
                  <Button type='submit' variant='outline-success'>
                    Search
                  </Button>
                </Form.Row>
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

export default connect(mapStateToProps, { getOrgName, getPeople })(Header);
