// React
import React, { Component } from 'react';

// Bootstrap
import { Container, Image } from 'react-bootstrap';

// HomePage image
import HomePage1 from '../layout/assets/HomePage1.JPG';

// CSS for the home page
import '../../css/home.css';

// Local Styles
const containerStyle = {
  marginTop: '80px',

  textAlign: 'center',
  width: '80%',
};

export class Home extends Component {
  render() {
    return (
      <Container style={containerStyle}>
        <div>
          <br /> <br />
          <Image src={HomePage1} height='100%' width='100%' />
          <br />
          <br />
          <br />
        </div>
        <div>
          <p class='impact' style={{ color: '#007bff' }}>
            Fast and Easy Self-Assessment by employees for COVID-19 Symptoms,
            enabling a Safe and Healthy Workplace
          </p>
        </div>
      </Container>
    );
  }
}

export default Home;
