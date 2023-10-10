export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');

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
	return Math.ceil(people / 40);
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	
	let sheepCount = 0;

	for (let i = 0; i < arr.length; i++){
		if(arr[i] === "sheep"){
			sheepCount += 1;
		}
	}
	
	return sheepCount;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// M postcode and has to be Manchester!!

	console.log("postCode is "+person.postCode)

	if (person.city && person.postCode){
		if(person.postCode[0] === "M" && person.city === "Manchester") {
			return true;
		}
	}


	return false;
}