const vowels = 'aeiou';
const consonants = 'bdfghjklmnprstvwyz';

let total = 0;
const numPossible = consonants.length * vowels.length;
for (let i = 1; i <= 6; i++) {
	console.log(`possible ${i}-syllable words:`, numPossible ** i);
	total += numPossible ** i;
}
console.log('total:', total);
console.log();

let out = '';
for (let i = 0; i < 80; i++) {
	out += consonants[Math.floor(Math.random() * consonants.length)];
	out += vowels[Math.floor(Math.random() * vowels.length)];
	out += ' ';
}
console.log(out);
