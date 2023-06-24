const probReproduce = 0.2;
const advantage = 0.001;
// const maxPop = 2000;
const t = 2000;

const numNoAdvantage = (1 + probReproduce) ** t;
const numAdvantage = (1 + probReproduce + advantage) ** t;
const ratio = numAdvantage / (numAdvantage + numNoAdvantage);
console.log(
	`ratio of creatures with advantage (${numAdvantage.toFixed(
		0
	)}) to those without (${numNoAdvantage.toFixed(0)}) after time ${t}:`,
	(100 * ratio).toFixed(2) + '%'
);
