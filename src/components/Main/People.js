// React
import React, { Component, Fragment } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPerson } from '../../redux/actions/survey';
import { getPeople } from '../../redux/actions/people';

// React Router
import { Redirect } from 'react-router-dom';

// Bootstrap
import {
  Container,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Row,
  Col,
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
      redirect: false,
    };

    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  static propTypes = {
    people: PropTypes.array.isRequired,
    setPerson: PropTypes.func.isRequired,
    city: PropTypes.string,
    getPeople: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { city } = this.props;
    if (city) {
      this.props.getPeople(city);
    }
    letters.map((letter) => {
      letter.disabled = true;
      return letter;
    });
  }

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

  handleClick(person) {
    this.props.setPerson(person);
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/symscreen-frontend/questions' />;
    }

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
                  <Button
                    onClick={() => this.handleClick(person)}
                    size='lg'
                    variant='outline-primary'
                    block
                    value={person}
                  >
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
  city: state.people.city,
});

export default connect(mapStateToProps, { setPerson, getPeople })(People);
