// React
import React, { Component, Fragment } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Bootstrap
import {
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

const letters = [
  { text: 'A', disabled: true },
  { text: 'B', disabled: true },
  { text: 'C', disabled: true },
  { text: 'D', disabled: true },
  { text: 'E', disabled: true },
  { text: 'F', disabled: true },
  { text: 'G', disabled: true },
  { text: 'H', disabled: true },
  { text: 'I', disabled: true },
  { text: 'J', disabled: true },
  { text: 'K', disabled: true },
  { text: 'L', disabled: true },
  { text: 'M', disabled: true },
  { text: 'N', disabled: true },
  { text: 'O', disabled: true },
  { text: 'P', disabled: true },
  { text: 'Q', disabled: true },
  { text: 'R', disabled: true },
  { text: 'S', disabled: true },
  { text: 'T', disabled: true },
  { text: 'U', disabled: true },
  { text: 'V', disabled: true },
  { text: 'W', disabled: true },
  { text: 'X', disabled: true },
  { text: 'Y', disabled: true },
  { text: 'Z', disabled: true },
];

export class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastNames: [],
      availableLetters: [],
      selectedLetter: '',
    };

    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  static propTypes = {
    people: PropTypes.array.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.people !== this.props.people) {
      letters.map((letter) => {
        letter.disabled = true;
        return letter;
      });

      let last_names = [];
      let searchLetters = [];
      this.props.people.map((person) => {
        last_names.push(person.last_name);
        if (!searchLetters.includes(person.last_name[0])) {
          searchLetters.push(person.last_name[0]);
        }
        searchLetters = searchLetters.sort();
        return this.setState({
          lastNames: last_names,
          availableLetters: searchLetters,
          selectedLetter: searchLetters[0],
        });
      });

      letters.map((letter) => {
        if (searchLetters.includes(letter.text)) {
          letter.disabled = false;
        }
        return letter;
      });
    }
  }

  handleChange(event) {
    this.setState({ selectedLetter: event.target.value });
  }

  render() {
    return (
      <Container className='mt-4'>
        <Col md={6}>
          <h4>Please select your last initial: </h4>
          <ToggleButtonGroup type='radio' name='options'>
            {letters.map((letter, index) => (
              <ToggleButton
                size='md'
                className='m-1'
                variant={letter.disabled ? 'secondary' : 'primary'}
                key={index}
                value={letter.text}
                disabled={letter.disabled}
                onChange={this.handleChange}
              >
                {letter.text}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Col>
        <Container className='mt-4 text-left'>
          {this.props.people.map((person) => {
            if (person.last_name[0] === this.state.selectedLetter) {
              return (
                <Row className='mt-2 mb-2' key={person.employee_id}>
                  <Button size='lg' variant='outline-primary' block>
                    {person.employee_id}
                    {' - '}
                    {person.first_name} {person.last_name}
                  </Button>
                </Row>
              );
            }

            return <Fragment key={person.employee_id} />;
          })}
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  people: state.people.people,
});

export default connect(mapStateToProps)(People);
