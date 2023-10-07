// https://www.quora.com/Can-somebody-show-me-a-proof-that-there-are-either-a-finite-or-infinite-number-of-pairs-of-natural-numbers-a-b-such-that-a-2-1-2-b-2-For-example-a-7-b-5-and-a-41-b-29-etc/answer/Rik-Bos-2?comment_id=350594036&comment_type=2

// produces this series:
// https://oeis.org/A031396

const max = 80000;

const k = 2;
// for (let k = 1; k <= 800; k++) {
// console.log(`k = ${k}:`);
outer: for (let b = 1; b <= max; b++) {
	for (let a = b + 1; a <= max; a++) {
		// if (a == 5 && b == 7) {
		// 	console.log('a', a, a ** 2);
		// 	console.log('b', b, 2 * b ** 2);
		// }
		if (k * b ** 2 - a ** 2 - 1 == 0) {
			console.log(`${b}^2 = ${b ** 2}, ${a}^2 = ${a ** 2}`);
			console.log(`2 * ${b}^2 = ${a}^2 + 1`);
			// console.log();
			// console.log(`\t${a}, ${b}`);
			console.log(k);
			// break outer;
		}
	}
}
// }
