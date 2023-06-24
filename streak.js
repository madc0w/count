const pWin = 0.4;
const pDraw = 0.1;

const predictedMeanStreakLengths = {
	w: predictStreak(pWin),
	d: predictStreak(pDraw),
	l: predictStreak(1 - pDraw - pWin),
};
console.log('predicted', predictedMeanStreakLengths);

function predictStreak(p) {
	return 1 / (1 - p);
}

const gameResults = [];
for (let i = 0; i < 200000; i++) {
	const r = Math.random();
	if (r <= pWin) {
		gameResults.push('w');
	} else if (r <= pWin + pDraw) {
		gameResults.push('d');
	} else {
		gameResults.push('l');
	}
}
// console.log(gameResults.join(''));

const streak = {
	type: gameResults[0],
	length: 0,
};
const streaks = {
	w: [],
	d: [],
	l: [],
};
for (const gr of gameResults) {
	if (gr == streak.type) {
		streak.length++;
	} else {
		streaks[streak.type].push(JSON.parse(JSON.stringify(streak)));
		// console.log(`streak: ${streak.type} ${streak.length}`);
		streak.type = gr;
		streak.length = 1;
	}
}

for (const type in streaks) {
	let sum = 0;
	for (const s of streaks[type]) {
		sum += s.length;
	}
	const mean = sum / streaks[type].length;
	console.log(`mean ${type.toUpperCase()} streak length:`, mean.toFixed(2));
}
