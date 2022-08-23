for (let n = 1; n < 2000; n++) {
	console.log(`${n},${factor(n).length}`);
}

function factor(n) {
	const factors = [];
	let divisor = 2;

	while (n >= 2) {
		if (n % divisor == 0) {
			factors.push(divisor);
			n /= divisor;
		} else {
			divisor++;
		}
	}
	return factors;
}
