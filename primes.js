let sequence = [];
for (let n = 3; n < 1e2; n += 2) {
	if (isPrime(n)) {
		sequence.push(n);
	}
}

for (let i = 0; i < 16; i++) {
	console.log(`derivative ${i}:`);
	console.log(sequence);
	console.log('========');
	sequence = derivative(sequence);
}

function isPrime(n) {
	for (let d = 3; d <= Math.sqrt(n); d += 2) {
		// console.log(`${n} % ${d}`, n % d);
		if (n % d == 0) {
			return;
		}
	}
	return true;
}

function derivative(seq) {
	const d = [];
	for (let i = 1; i < seq.length; i++) {
		d.push(seq[i] - seq[i - 1]);
	}
	return d;
}
