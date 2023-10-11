export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');

	const results = [];

	nums.forEach(function (num) {
		let squared = num * num;
		results.push(squared);
	});

	return results;
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');

	let camelOutput = "";

	camelOutput += words[0];

	for (let i = 1; i < words.length; i++){
		words[i] = words[i][0].toUpperCase() + words[i].slice(1);
		camelOutput += words[i];
	}
	return camelOutput;
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	// Your code here!
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!
}
