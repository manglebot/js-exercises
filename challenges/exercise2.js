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

	words.slice(1).forEach(word => {
		word = word[0].toUpperCase() + word.slice(1);
		camelOutput += word;
	});

	return camelOutput;
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');

	let totalSubjects = 0;

	people.forEach(function(person){
		if(person.subjects.length > 0){
			totalSubjects += person.subjects.length;
		}
	});

	return totalSubjects;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');

	return menu.some(meal => (meal.ingredients.includes(ingredient)));
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	
	const set1 = new Set(arr1);
	const set2 = new Set(arr2);
	
	const duplicates = [];

	for(const set1Num of set1){
		
		for(const set2Num of set2){
			if(set1Num == set2Num){
				duplicates.push(set1Num);
			};
		};
	};

	return duplicates.sort();
}