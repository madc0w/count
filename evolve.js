const probReproduce = 0.2;
const advantage = 0.0001;
const noiseFactor = 0.2;
const maxPop = 2000;
const t = 80000;

let numNoAdvantage = 1;
let numAdvantage = 1;

for (let i = 0; i < t; i++) {
	const noise = noiseFactor * (Math.random() - 0.5);
	numNoAdvantage *= 1 + probReproduce + noise;
	numAdvantage *= 1 + probReproduce + noise + advantage;

	if (numNoAdvantage + numAdvantage > maxPop) {
		const deathRatio = maxPop / (numNoAdvantage + numAdvantage);
		numNoAdvantage *= deathRatio;
		numAdvantage *= deathRatio;
	}
}

// let numNoAdvantage = (1 + probReproduce) ** t;
// let numAdvantage = (1 + probReproduce + advantage) ** t;

// const deathRatio = maxPop / (numNoAdvantage + numAdvantage);
// numNoAdvantage *= deathRatio;
// numAdvantage *= deathRatio;

const ratio = numAdvantage / (numAdvantage + numNoAdvantage);
console.log(
	`ratio of creatures with advantage (${numAdvantage.toFixed(
		0
	)}) to those without (${numNoAdvantage.toFixed(0)}) after time ${t}:`,
	(100 * ratio).toFixed(2) + '%'
);
