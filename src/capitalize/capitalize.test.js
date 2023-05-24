const {capitalize} = require('./capitalizefirstletter.js');

describe('capitalize', () => {
  test('should capitalize the first letter of a single word', () => {
    const word = 'hi';
    const expected_word = 'Hi';
    const result = capitalize(word);
    expect(result).toBe(expected_word);
  });

  test('capitalize the first letter of each word', () => {
    const word = 'Hi its me';
    const expected_word = 'Hi Its Me';
    const result = capitalize(word);
    expect(result).toBe(expected_word);
  });

  test('return an empty string if the input is  empty', () => {
    const word = '';
    const expected_word = '';
    const result = capitalize(word);
    expect(result).toBe(expected_word);
  });

  test('should handle leading and trailing spaces', () => {
    const word = '  hi  its me  ';
    const expected_word = '  Hi  Its Me  ';
    const result = capitalize(word);
    expect(result).toBe(expected_word);
  });
});
