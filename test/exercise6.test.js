import {
	sumDigits,


} from '../challenges/exercise6-optional';

// *** add when needed ***
// createRange,
// getScreentimeAlertList,
// hexToRGB,
// findWinner,

describe('sumDigits', () => {
	test('return the sum all the digits in the provided number', () => {
		expect(sumDigits(123)).toBe(6);
		expect(sumDigits(444)).toBe(12);
		expect(sumDigits(123456789)).toBe(45);
	});
});