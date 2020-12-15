import { ageFrom } from './dates';

describe('testing dates.js file', () => {
  const RealDate = Date.now;
  beforeAll(() => {
    global.Date.now = jest.fn(() => new Date('2020-01-01T00:00:00Z').getTime());
  });

  afterAll(() => {
    global.Date.now = RealDate;
  });
  test('must evaluate in minutes if the date diff is less than an hour', () => {
    const theDate = '2019-12-31T23:45:00Z';
    const result = ageFrom(theDate);
    expect(result).toEqual('15 minutes');
  });
  test('must evaluate in hours if the date diff is less than 24 hours', () => {
    const theDate = '2019-12-31T21:45:00Z';
    const result = ageFrom(theDate);
    expect(result).toEqual('2 hours');
  });
  test('must evaluate in days if the date diff is less than 30 days', () => {
    const theDate = '2019-12-15T21:45:00Z';
    const result = ageFrom(theDate);
    expect(result).toEqual('16 days');
  });
  test('must evaluate in months if the date diff is less than 12 months', () => {
    const theDate = '2019-08-15T21:45:00Z';
    const result = ageFrom(theDate);
    expect(result).toEqual('4 months');
  });
  test('must evaluate in years if the date diff is more than 12 months', () => {
    const theDate = '2017-08-15T21:45:00Z';
    const result = ageFrom(theDate);
    expect(result).toEqual('2 years');
  });
});
