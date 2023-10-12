export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');

	const smallNums = [];

	nums.forEach(number => {
		if (number < 1){
			smallNums.push(number);
		}
	});

	return smallNums;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');

	const matchingNames = [];

	names.forEach(person => {
		if (person[0] === char){
			matchingNames.push(person);
		};
	});

	return matchingNames;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	
	const foundVerbs = [];

	words.forEach(word => {
		if(word.startsWith("to ")){
			foundVerbs.push(word);
		};
	});
	return foundVerbs;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	
	const onlyIntegers = [];

	nums.forEach(number => {
		if(Number.isInteger(number)){
			onlyIntegers.push(number);
		};
	});
	return onlyIntegers;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	
	const cities = [];

	users.forEach(user => {
		cities.push(user.data.city.displayName);
	});

	return cities;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	
	const squareRoots = [];

	nums.forEach(number => {

		const output = Math.sqrt(number);

		if(Number.isInteger(output)){
			squareRoots.push(output);
		} else {
			squareRoots.push(Number(output.toFixed(2)));
		};
	});

	return squareRoots;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	
	const specifiedString = [];

	sentences.forEach(sentence => {
		if(sentence.toLowerCase().includes(str.toLowerCase())){
			specifiedString.push(sentence);
		}
	})

	return specifiedString;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here
}
