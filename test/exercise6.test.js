import {
	sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,

} from '../challenges/exercise6-optional';

// *** add to import when needed ***
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

describe('getScreentimeAlertList', () => {
	test('return an array of usernames of users who have used more than 100 minutes of screentime for a given date', () => {
		expect(getScreentimeAlertList([
            {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                        ]
            },
            {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                        ]
            }
        ],"2019-05-04")).toEqual(["beth_1234"]);
	});
});

describe('hexToRGB', () => {
	test('return the sum all the digits in the provided number', () => {
		expect(hexToRGB('#289b14')).toBe('rgb(40,155,20)');
		expect(hexToRGB('#9b4c14')).toBe('rgb(155,76,20)');
		expect(hexToRGB('#e214af')).toBe('rgb(226,20,175)');
	});
});