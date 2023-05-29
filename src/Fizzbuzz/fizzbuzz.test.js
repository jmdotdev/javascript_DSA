const fizzbuzz = require('./fizzbuzz');

describe('Testing fizzbuzz func', () => {


  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should return values for numbers that are divisible by both 3 and 5', () => {
    fizzbuzz(15);
    expect(consoleSpy).toHaveBeenCalledTimes(15);
    expect(consoleSpy.mock.calls).toEqual([
      ['1'], ['2'], ['Fizz'], ['4'], ['Buzz'], ['Fizz'], ['7'], ['8'], ['Fizz'], ['Buzz'], ['11'], ['Fizz'], ['13'], ['14'], ['fizzbuzz']
    ]);
  });

  it('should return correct values for numbers divisible by 3', () => {
    fizzbuzz(9);
    expect(consoleSpy).toHaveBeenCalledTimes(9);
    expect(consoleSpy.mock.calls).toEqual([
      ['1'], ['2'], ['Fizz'], ['4'], ['Buzz'], ['Fizz'], ['7'], ['8'], ['Fizz']
    ]);
  });

  it('should return correct values for numbers divisible by 5', () => {
    fizzbuzz(10);
    expect(consoleSpy).toHaveBeenCalledTimes(10);
    expect(consoleSpy.mock.calls).toEqual([
      ['1'], ['2'], ['Fizz'], ['4'], ['Buzz'], ['Fizz'], ['7'], ['8'], ['Fizz'], ['Buzz']
    ]);
  });
});