import {
	sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,

} from '../challenges/exercise5';

// ***** to add when needed
// createMatrix,
// areWeCovered,

describe('sumMultiples', () => {
	test('return the sum of any numbers which are a multiple of 3 or 5', () => {
		expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
		expect(sumMultiples([3, 3, 3, 4, 2, 9])).toBe(18);
		expect(sumMultiples([4, 20, 654, 123, 23, 40, 1])).toBe(837);
	});
});

describe('isValidDNA', () => {
	test('receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only', () => {
		expect(isValidDNA('CGTA')).toBe(true);
		expect(isValidDNA('CGBAQ')).toBe(false);
		expect(isValidDNA('CCGGTTAACCGGTTAA')).toBe(true);
	});
});

describe('getComplementaryDNA', () => {
	test('receive a valid DNA string (see above) and should return a string of the complementary base pairs', () => {
		expect(getComplementaryDNA('CGTA')).toBe('GCAT');
		expect(getComplementaryDNA('CCGT')).toBe('GGCA');
		expect(getComplementaryDNA('CGTACCGTCGTACCGT')).toBe('GCATGGCAGCATGGCA');
	});
});

describe('isItPrime', () => {
	test('should return true for a prime number', () => {
		expect(isItPrime(17)).toBe(true);
		expect(isItPrime(11)).toBe(true);
	});
    test('should return false for a non prime number', () => {
		expect(isItPrime(12)).toBe(false);
		expect(isItPrime(25)).toBe(false);
	});
    test('should return false for a negative number', () => {
		expect(isItPrime(-7)).toBe(false);
	});
    test('should handle large prime number', () => {
		expect(isItPrime(6959)).toBe(true);
	});
});