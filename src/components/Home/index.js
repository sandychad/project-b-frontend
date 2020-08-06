// React
import React, { Component } from 'react';

// Bootstrap
import { Container, Image } from 'react-bootstrap';

// HomePage image
import HomePage1 from '../layout/assets/HomePage1.JPG';

// Local Styles
const containerStyle = {
  marginTop: '80px',
  height: '100%',
  textAlign: 'center',
};

export class Home extends Component {
  render() {
    return (
      <Container style={containerStyle}>
        <div className='ss-container'>
          <br /> <br />
          <Image src={HomePage1} height='500' width='100%' />
          <br />
          <br />
          <br />
          <p>
            Fast and Easy Self-Assessment by employees for COVID-19 Symptoms,
            enabling a Safe and Healthy Workplace
          </p>
        </div>
      </Container>
    );
  }
}

export default Home;
