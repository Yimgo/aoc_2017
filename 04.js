const _ = require('lodash');

let input = '';

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null)
  input += chunk;
});

const anagrams = (a, b) => a.split('').sort().join('') === b.split('').sort().join('');

const isValidA = (row) => new Set(row).size === row.length;

const isValidB = (row) => {
  for (let i = 0; i < row.length; i += 1) {
    for (let j = i + 1; j < row.length; j += 1) {
      if (anagrams(row[i], row[j])) {
        return false;
      }
    }
  }
  return true;
}

process.stdin.on('end', () => {
  process.stdout.write(String(input.trim().split('\n')
    .map(row => row.split(' '))
    .reduce((sum, row) => {
      let predicate;
      if (process.argv[2] === 'a')
        predicate = isValidA;
      else
        predicate = isValidB;

      if (predicate(row))
        return sum += 1;
      return sum;
    }, 0)));
});
