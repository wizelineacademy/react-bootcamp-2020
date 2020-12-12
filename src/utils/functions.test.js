import { arrayEqualsTo, formatDate, setURLKeywords } from './functions';

describe('Testing functions.js', () => {
  it('formatDate returns valid format', () => {
    expect(formatDate('2020-04-06T21:25:28Z')).toMatch(/\w+\s\d{2}|\d{1},\s\d{4}/);
  });

  it('arrayEqualsTo compares two equal arrays', () => {
    const arr1 = ['1', '2', '3'];
    const arr2 = ['1', '2', '3'];
    expect(arrayEqualsTo(arr1, arr2)).toBe(true);
  });

  it('arrayEqualsTo compares two different arrays', () => {
    const arr1 = ['1', '2', '3'];
    const arr2 = ['1', '2', '3', '4', '5'];
    expect(arrayEqualsTo(arr1, arr2)).not.toBe(true);
  });

  it('arrayEqualsTo compares two equal arrays with children on different order', () => {
    const arr1 = ['3', '2', '1'];
    const arr2 = ['1', '3', '2'];
    expect(arrayEqualsTo(arr1, arr2)).not.toBe(true);
  });

  it('setURLKeywords returns formated params with 1 keyword', () => {
    const params = ['dog'];
    expect(setURLKeywords(params)).toMatch(/^(&q=)(\w+)(\+\w+)*/);
  });

  it('setURLKeywords returns formated params with more than 1 keyword', () => {
    const params = ['skateboarding', 'dog'];
    expect(setURLKeywords(params)).toMatch(/^(&q=)(\w+)(\+\w+)*/);
  });

  it('setURLKeywords does not return formated params with 0 keywords', () => {
    const params = [];
    expect(setURLKeywords(params)).not.toMatch(/^(&q=)(\w+)(\+\w+)*/);
  });
});
