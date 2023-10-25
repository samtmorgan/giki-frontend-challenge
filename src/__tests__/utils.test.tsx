import { formatNumber } from '../utils/utils';

describe('formatNumber function returns expected value', () => {
  test('formatNumber function returns a string representation of the number passed', () => {
    const result = formatNumber(44);
    expect(result).toEqual('44');
  });
  test('formatNumber adds a comma to the number passed', () => {
    const result = formatNumber(1234);
    expect(result).toEqual('1,234');
  });
});
