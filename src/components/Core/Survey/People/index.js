// React
import React, { Component, Fragment } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPerson } from '../../../../redux/actions/survey';
import { getPeople } from '../../../../redux/actions/people';

// React Router
import { Redirect } from 'react-router-dom';

// Bootstrap
import { Container } from 'react-bootstrap';

// Local Components
import { Loading } from '../../../common/Loading';
import {
  getLetters,
  disableLetters,
  getSearchLettersFromPeople,
  enableLetters,
} from './helpers';
import LastNameSearch from './LastNameSearch';
import PeopleButtonList from './PeopleButtonList';
import * as paths from '../../../../utils/paths';
let letters = getLetters();

export class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableLetters: [],
      selectedLetter: '',
      redirect: false,
    };

    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.handleLetterClick = this.handleLetterClick.bind(this);
    this.handlePersonClick = this.handlePersonClick.bind(this);
  }
  static propTypes = {
    people: PropTypes.array.isRequired,
    setPerson: PropTypes.func.isRequired,
    city: PropTypes.string,
    getPeople: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { city, getPeople } = this.props;

    // Search if city set
    if (city) {
      getPeople(city);
    }

    // Disable all letters
    letters = disableLetters(letters);
  }

  componentDidUpdate(prevProps) {
    // Update Logic for when people changes (i.e. new city search)
    const { people } = this.props;

    if (prevProps.people !== people) {
      // Disable all letters
      letters = disableLetters(letters);

      // Get available letters and set in state
      const searchLetters = getSearchLettersFromPeople(people);
      this.setState({
        availableLetters: searchLetters,
        selectedLetter: searchLetters[0],
      });

      // Enable necessary letters
      letters = enableLetters(letters, searchLetters);
    }
  }

  // When user clicks on letter,
  // sets selectedLetter in state and triggers re-render as a result
  handleLetterClick(event) {
    this.setState({ selectedLetter: event.target.value });
  }

  // When user clicks on person,
  // sets person + redirect in state and triggers re-render + redirect to /main/questions
  handlePersonClick(person) {
    const { setPerson } = this.props;

    setPerson(person);
    this.setState({ redirect: true });
  }

  // Cleanup code when component unmounts
  // Disables all letters
  componentWillUnmount() {
    letters = disableLetters(letters);
  }

  render() {
    const { people } = this.props;
    const { selectedLetter } = this.state;
    const { handleLetterClick, handlePersonClick } = this;

    // Handling of Redirect once person is selected
    if (this.state.redirect) {
      return <Redirect to={paths.SURVEY_QUESTIONS_PATH} />;
    }

    return (
      <Container fluid className='mt-4 text-center'>
        {people ? (
          <Fragment>
            <LastNameSearch
              letters={letters}
              handleLetterClick={(e) => handleLetterClick(e)}
            />

            <PeopleButtonList
              people={people}
              selectedLetter={selectedLetter}
              handlePersonClick={(person) => handlePersonClick(person)}
            />
          </Fragment>
        ) : (
          <Loading />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  people: state.people.people,
  city: state.people.city,
});

export default connect(mapStateToProps, { setPerson, getPeople })(People);
