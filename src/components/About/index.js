// React
import React, { Component } from 'react';

// React Bootstrap
import { Container } from 'react-bootstrap';

// CSS for the About page
import '../../css/faq.css';

// Local Styles
const containerStyle = {
  marginTop: '80px',
  height: '100%',
};

export class About extends Component {
  render() {
    return (
      <Container style={containerStyle}>
        <div className='ss-container'>
          <h3 className='ss-color'>SymScreen – How It Works?</h3>
          <div className='container'>
            <h4>Overview</h4>
            <ul className='a'>
              <li>
                <strong>Build a safe workplace</strong> by pre-screening
                employees before they enter the office, therby reducing the risk
                of spread of COVID-19.
              </li>
              <li>
                <strong>A self-assessment</strong> completed by consenting
                employees allows for efficient control over the health and
                safety of everyone working in close proximity
              </li>
            </ul>

            <h4>Setup</h4>
            <ul className='a'>
              <li>
                A kiosk with tablet/touchscreen computer and a thermometer is
                setup at the entrance to an office.
              </li>
              <li>
                An employee overseeing physical security of the building (eg.
                building receptionist) logs into the SymScreen cloud app at the
                kiosk.
              </li>
              <li>
                Any employee coming into the building completes survey in under
                30 seconds and if successful enters office.
              </li>
            </ul>

            <h4>Data Recording</h4>
            <ul className='a'>
              <li>Measure body temperature</li>
              <li>Employee selects their name</li>
              <li>
                Enters temperature, answers few questions, and submits survey
              </li>
            </ul>
          </div>
          <h3 className='ss-color'>Contact</h3>
          <ul className='a'>
            <li>
              <strong>Sales:</strong>{' '}
              <a href='mailto:sales@symscreen.com'>sales@symscreen.com</a>
            </li>
            <li>
              <strong>Support:</strong>{' '}
              <a href='mailto:support@symscreen.com'>support@symscreen.com</a>
            </li>
            <li>
              <strong>Press and Media:</strong>{' '}
              <a href='mailto:media@symscreen.com'>media@symscreen.com</a>
            </li>
          </ul>
          <h3 className='ss-color'> Privacy Policy</h3>
          <p>...Coming Soon...</p>
          <h3 className='ss-color'>Frequently Asked Questions</h3>
        </div>
        <ul className='ss-container'>
          <li className='ss-items'>
            <input type='checkbox' name='ac' id='a1' />
            <label htmlFor='a1'>What is SymScreen?</label>
            <div className='ss-content'>
              <p>
                SymScreen is a Cloud-based platform to track Covid-19 Symptoms
                of employees in any size organization. SymScreen makes the
                process of capturing, reporting, and auditing Covid-19 symptoms
                extremely fast and helps Organizations provide a safe and
                healthy work environment to their employees.
              </p>
            </div>
          </li>

          <li className='ss-items'>
            <input type='checkbox' name='ac' id='a2' />
            <label htmlFor='a2'>How does it work?</label>
            <div className='ss-content'>
              <p>
                Employer sets up a tracking station with a thermometer and a
                touch enabled device such as Tablet or touch-screen PC/Laptop.
                SymScreen takes care of the rest to track Body temperature and
                collect employee response to few survey questions.
              </p>
            </div>
          </li>

          <li className='ss-items'>
            <input type='checkbox' name='ac' id='a3' />
            <label htmlFor='a3'>How long does it take to enter data?</label>
            <div className='ss-content'>
              <p>
                Within 30 sec, the end-to-end process including measuring
                temperature, entering data and evaluate responses for successful
                completion of survey can be completed.
              </p>
            </div>
          </li>

          <li className='ss-items'>
            <input type='checkbox' name='ac' id='a4' />
            <label htmlFor='a4'>How much does it cost?</label>
            <div className='ss-content'>
              <p>
                Please contact{' '}
                <a href='mailto:sales@symscreen.com'>sales@symscreen.com</a>{' '}
              </p>
            </div>
          </li>
        </ul>

        <div className='ss-container'>
          <h3 className='ss-color'>About The Company</h3>

          <p>
            SS21 Technologies LLC is founded on the principles of Resilience,
            Perseverance, and Beneficience, especially amidst the hardship
            inflicted by the COVID-19 Pandemic. We build Software Solutions for
            the 21st Century.
          </p>
          <div id='box'>
            <p>
              {' '}
              <b className='ss-color'>SymScreen</b> empowers Organizations to
              provide a safe work environment by keeping track of health and
              wellbeing of employees, making COVID-19 screening a breeze.
            </p>
          </div>
          <p>
            <br />
            <b>Community Service:</b>
          </p>
          <p>
            We are currently developing a free web portal to connect food
            pantries and soup kitchens with food-insecure individuals are at or
            below poverty line in the United States.
          </p>
        </div>
        <br />
        <br />
      </Container>
    );
  }
}

export default About;
