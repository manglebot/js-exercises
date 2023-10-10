export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	
	console.log("sandwich is "+sandwich.fillings);
	
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	if (person.city === "Manchester"){
		return true;
	} else {
		return false;
	}
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');

	//let buses = people / 40;
	console.log(Math.ceil(people / 40));

	return Math.ceil(people / 40);
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
}