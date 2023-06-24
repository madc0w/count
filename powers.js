for (let n = 1; n < 200000; n++) {
	for (let pow1 = 2; pow1 <= 20; pow1++) {
		for (let pow2 = 2; pow2 <= 12; pow2++) {
			const root1 = Math.pow(n, 1 / pow1);
			const root2 = Math.pow(n + 1, 1 / pow2);
			if (
				root1.toFixed(8) == parseInt(root1) &&
				root2.toFixed(8) == parseInt(root2)
			) {
				console.log(
					`${n} is a perfect ${pow1}-power & ${
						n + 1
					} is a perfect ${pow2}-power`
				);
			}
		}
	}
}
