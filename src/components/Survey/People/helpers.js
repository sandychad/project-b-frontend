// GET LETTERS
export const getLetters = () => {
  return [
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
};

// DISABLE ALL LETTERS
export const disableLetters = (letters) => {
  letters.map((letter) => {
    letter.disabled = true;
    return letter;
  });
  return letters;
};

// PASS in people, RETURN availableLetters and selectedLetter
export const getSearchLettersFromPeople = (people) => {
  let last_names = [];
  let searchLetters = [];

  people.map((person) => {
    last_names.push(person.last_name);
    if (!searchLetters.includes(person.last_name[0])) {
      searchLetters.push(person.last_name[0]);
    }
    searchLetters = searchLetters.sort();
    return person;
  });
  return searchLetters;
};

// ENABLE letters based on searchLetters
export const enableLetters = (letters, searchLetters) => {
  letters.map((letter) => {
    if (searchLetters.includes(letter.text)) {
      letter.disabled = false;
    }
    return letter;
  });
  return letters;
};

// GET ROW PARAMS for 7 x 4 Grid
export const getRowParams = () => {
  let rowParams = [];
  for (let i = 0; i < 4; i++) {
    rowParams.push({ min: i * 7, max: (i + 1) * 7 });
  }
  return rowParams;
};
