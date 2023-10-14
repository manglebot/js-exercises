import {
	sumDigits,
    createRange,

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

describe('createRange', () => {
	test('return array with range from start to end using steps', () => {
		expect(createRange(3,11,2)).toEqual([ 3, 5, 7, 9, 11 ]);
	});
    test('return array with range from start to end using default step', () => {
		expect(createRange(5,10)).toEqual([ 5, 6, 7, 8, 9, 10 ]);
	});
});