// React
import React, { Component } from 'react';

// React Bootstrap
import { Container, Dropdown, Button } from 'react-bootstrap';

// Local Styles
const containerStyle = {
  width: 'auto',
  justifyContent: 'center',
};

export class CityDropdown extends Component {
  render() {
    const { cities, searchCity, handleClick } = this.props;
    return (
      <Container style={containerStyle} name='ct'>
        {cities.map((city, index) => (
          <Dropdown.Item
            as={Button}
            size='md'
            className='m-1'
            variant='primary'
            key={index}
            value={city}
            active={searchCity === city ? true : false}
            onClick={handleClick}
          >
            {city}
          </Dropdown.Item>
        ))}
      </Container>
    );
  }
}

export default CityDropdown;
