// React
import React, { Component } from 'react';

// Bootstrap
import { Container } from 'react-bootstrap';

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
          <h3 className='ss-color'>SymScreen – How It Works?</h3>
          <div class='text-left'>
            <h4>Overview</h4>
            <p>
              <b>- Build a safe workplace</b> by pre-screening employees before
              they enter the office, therby reducing the risk of spread of
              COVID-19.
            </p>
            <p>
              <b>- A self-assessment</b> completed by consenting employees
              allows for efficient control over the health and safety of
              everyone working in close proximity
            </p>
            <h4>Setup</h4>
            <p>
              - A kiosk with tablet/touchscreen computer and a thermometer is
              setup at the entrance to an office.
            </p>
            <p>
              - An employee overseeing physical security of the building (eg.
              building receptionist) logs into the SymScreen cloud app at the
              kiosk.
            </p>
            <p>
              - Any employee coming into the building completes survey in under
              30 seconds and if successful enters office.
            </p>
            <h4>Data Recording</h4>
            <p>Measure body temperature</p>
            <p>Employee selects their name</p>
            <p>Enters temperature, answers few questions, and submits survey</p>
          </div>
          <div class='text-left'>
            <h3 class={'text-left text-primary'}>Contact</h3>
            <p>
              <b>Sales:</b>{' '}
              <a href='mailto:sales@symscreen.com'>sales@symscreen.com</a>
            </p>
            <p>
              <b>Support:</b>{' '}
              <a href='mailto:support@symscreen.com'>support@symscreen.com</a>
            </p>
            <p>
              <b>Press and Media:</b>{' '}
              <a href='mailto:media@symscreen.com'>media@symscreen.com</a>
            </p>
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
