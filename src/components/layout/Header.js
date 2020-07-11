// React
import React, { Component } from 'react';

// React Router
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOrgName, getCities } from '../../redux/actions/organization';
import { getPeople, setCity } from '../../redux/actions/people';
import { logout } from '../../redux/actions/auth';

// React Bootstrap
import {
  Navbar,
  SplitButton,
  Button,
  Container,
  Dropdown,
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

    this.handleClick = this.handleClick.bind(this);
  }
  static propTypes = {
    getOrgName: PropTypes.func.isRequired,
    org_name: PropTypes.string.isRequired,
    getCities: PropTypes.func.isRequired,
    setCity: PropTypes.func.isRequired,
    getPeople: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
  };

  componentDidMount() {
    if (this.props.org_name === '') {
      this.props.getOrgName();
    }

    if (this.props.cities.length === 0) {
      this.props.getCities();
    }
  }

  componentDidUpdate(prevState) {
    const { searchCity } = this.state;
    if (searchCity !== prevState.searchCity && searchCity !== '') {
      this.props.setCity(searchCity);
      this.props.getPeople(searchCity);
    }
  }

  handleClick(event) {
    this.setState({ searchCity: event.target.value });
  }

  render() {
    const { org_name, cities, city } = this.props;
    const { isAuthenticated } = this.props.auth;

    const logoutButton = (
      <React.Fragment>
        <Button onClick={this.props.logout}>Logout</Button>
      </React.Fragment>
    );

    return (
      <Navbar bg='primary' variant='dark' expand='sm' fixed='top'>
        <Navbar.Brand as={Link} to='/main/people'>
          SymScreen
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='justify-content-end' id='navbarCollapse'>
          <SplitButton
            alignRight
            variant='primary'
            title={org_name + ' | ' + (city !== '' ? city : 'Location')}
          >
            <Container style={containerStyle} name='ct'>
              {cities.map((city, index) => (
                <Dropdown.Item
                  as={Button}
                  size='md'
                  className='m-1'
                  variant='primary'
                  key={index}
                  value={city}
                  active={this.state.searchCity === city ? true : false}
                  onClick={(e) => this.handleClick(e)}
                >
                  {city}
                </Dropdown.Item>
              ))}
            </Container>
          </SplitButton>
        </Navbar.Collapse>
        {isAuthenticated ? logoutButton : null}
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  org_name: state.organization.org_name,
  auth: state.auth,
  cities: state.organization.cities,
  city: state.people.city,
});

export default connect(mapStateToProps, {
  getOrgName,
  getPeople,
  getCities,
  setCity,
  logout,
})(Header);
