const _ = require('lodash');

let input = '';

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null)
    input += chunk;
});

const substractMinMax = arr => _.max(arr) - _.min(arr);
const divideEvenly = arr => {
	for (let i = 0; i < arr.length; i += 1) {
		for (let j = i + 1; j < arr.length; j += 1) {
			const a = _.min([arr[i], arr[j]]);
			const b = _.max([arr[i], arr[j]]);
			if (b % a == 0) {
				return b / a;
			}
		}
	}
	return -1;
};

process.stdin.on('end', () => {
  process.stdout.write(String(input.trim().split('\n')
  	.map(row => row.split('\t').map(v => Number(v)))
  	.reduce((sum, row, idx, arr) => {
  		return sum + (process.argv[2] === 'a' ? substractMinMax(row) : divideEvenly(row));
  	}, 0)));
});
