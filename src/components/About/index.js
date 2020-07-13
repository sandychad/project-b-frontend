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
        <div class='ss-container'>
          <h3 class='ss-color'>About The Company</h3>

          <p>
            SS21 Technologies LLC is founded on the principles of Resilience,
            Perseverance, and doing good in the world despite hardship inflicted
            by the Pandemic, through software solutions for the 21st Century.
          </p>
          <div id='box'>
            <p>
              {' '}
              <b class='ss-color'>SymScreen</b> is our first foray into enabling
              Organizations provide a safe work environment by keeping track of
              health and wellbeing of employees.
            </p>
          </div>
          <p>
            <br />
            <b>Community Service:</b>
          </p>
          <p>
            We are also working on a free web portal to connect Food pantries
            and Soup kitchens with people who need help and are at or below
            poverty line in the United States.
          </p>

          <h3 class='ss-color'>SymScreen – How It Works?</h3>
          <h4>Goals</h4>
          <ol>
            <li>
              A safe work environment requires employees working in proximity
              and those infected with Covid-19 are not allowed inside, thereby
              an Office is not a place where Covid-19 infection is spread.
            </li>
            <li>
              A self-assessment by employees with consent is the best mechanism
              to ensure health and safety of everyone working in close
              proximity.
            </li>
          </ol>

          <h4>Setup</h4>
          <ul class='a'>
            <li>
              A kiosk with tablet / touch-PC and a thermometer is setup at the
              entrance to an office.
            </li>
            <li>
              An employee overseeing physical security of the building (ex:
              Building receptionist) logs into the SymScreen cloud app at the
              kiosk.
            </li>
            <li>
              Any employee coming into the building completes survey in under 30
              seconds and if successful enters office.
            </li>
          </ul>

          <h4>Data Recording</h4>
          <ol>
            <li>Measure body temperature</li>
            <li>Employee selects his/her name</li>
            <li>
              Enters temperature, answers few questions, and submits survey
            </li>
          </ol>
          <h3 class='ss-color'>Contact</h3>
          <ol>
            <li>
              Sales:{' '}
              <a href='mailto:sales@symscreen.com'>sales@symscreen.com</a>
            </li>
            <li>
              Support:{' '}
              <a href='mailto:support@symscreen.com'>support@symscreen.com</a>
            </li>
            <li>
              Press and Media:{' '}
              <a href='mailto:media@symscreen.com'>media@symscreen.com</a>
            </li>
          </ol>
          <h3 class='ss-color'> Privacy Policy</h3>
          <p>...Coming Soon...</p>
          <h3 class='ss-color'>Frequently Asked Questions</h3>
        </div>
        <ul class='ss-container'>
          <li class='ss-items'>
            <input type='checkbox' name='ac' id='a1' />
            <label for='a1'>What is SymScreen?</label>
            <div class='ss-content'>
              <p>
                SymScreen is a Cloud-based platform to track Covid-19 Symptoms
                of employees in any size organization. SymScreen makes the
                process of capturing, reporting, and auditing Covid-19 symptoms
                extremely fast and helps Organizations provide a safe and
                healthy work environment to their employees.
              </p>
            </div>
          </li>

          <li class='ss-items'>
            <input type='checkbox' name='ac' id='a2' />
            <label for='a2'>How does it work?</label>
            <div class='ss-content'>
              <p>
                Employer sets up a tracking station with a thermometer and a
                touch enabled device such as Tablet or touch-screen PC/Laptop.
                SymScreen takes care of the rest to track Body temperature and
                collect employee response to few survey questions.
              </p>
            </div>
          </li>

          <li class='ss-items'>
            <input type='checkbox' name='ac' id='a3' />
            <label for='a3'>How long does it take to enter data?</label>
            <div class='ss-content'>
              <p>
                Within 30 sec, the end-to-end process including measuring
                temperature, entering data and evaluate responses for successful
                completion of survey can be completed.
              </p>
            </div>
          </li>

          <li class='ss-items'>
            <input type='checkbox' name='ac' id='a4' />
            <label for='a4'>How much does it cost?</label>
            <div class='ss-content'>
              <p>
                Please contact{' '}
                <a href='mailto:sales@symscreen.com'>sales@symscreen.com</a>{' '}
              </p>
            </div>
          </li>
        </ul>
      </Container>
    );
  }
}

export default About;
