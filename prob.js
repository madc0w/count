const numIts = 100000;
const maxNum = 20;
let totalNumGuesses = 0;
const numGuesses = [];
for (let i = 0; i <= maxNum; i++) {
	numGuesses.push(0);
}

for (let i = 0; i < numIts; i++) {
	const n = Math.ceil(Math.random() * maxNum);
	// console.log('n', n);
	let guess;
	const guesses = [];
	do {
		do {
			guess = Math.ceil(Math.random() * maxNum);
		} while (guesses.includes(guess));
		// console.log('guess', guess);
		guesses.push(guess);
	} while (guess != n);
	// console.log('num guesses', guesses.length);
	totalNumGuesses += guesses.length;
	numGuesses[guesses.length]++;
}

// console.log('mean num guesses', (totalNumGuesses / numIts).toFixed(2));
let i = 0;
for (const ng of numGuesses) {
	console.log(i++ + ',' + ng);
}
