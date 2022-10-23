const chests = 'ABCD';

function findPermutations(arr = []) {
	let res = [];
	const helper = (arr2) => {
		if (arr2.length == arr.length) return res.push(arr2);
		for (let e of arr) if (!arr2.includes(e)) helper([...arr2, e]);
	};
	helper([]);
	return res;
}
for (const line of findPermutations(chests)) {
	console.log(line.join(' '));
}
