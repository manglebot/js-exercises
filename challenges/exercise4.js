export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	
	for(let i=0; i < nums.length -1; i++){
		if(nums[i] === n){
			return nums[i + 1];
		};
	};
	return null;
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	
	const numberStr = str.toString();

	const counts = { 
		'1': 0,
		'0': 0,
	};

		for(let digit of numberStr){
			if (digit === '0'){
				counts['0']++;
		};
			if (digit === '1'){
				counts['1']++;
			};
		};

	return counts;
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	
	return (
		parseInt(
			n
			.toString()
			.split('')
			.reverse()
			.join('')
			)
		)
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	// Your code here!
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
};
