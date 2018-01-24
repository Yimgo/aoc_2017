const _ = require('lodash');

let input = [];

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    input.push(...chunk.split('\t').map(v => Number.parseInt(v, 10)));
  }
});

const balance = banks => {
  const bankOffset = banks.indexOf(_.max(banks));
  const rebalanceValue = banks[bankOffset];

  return banks.map((v, idx) => {
    if (idx === bankOffset) {
      return Math.floor(rebalanceValue / banks.length);
    }
    return v + Math.floor(rebalanceValue / banks.length) + (((idx - bankOffset + banks.length) % banks.length) <= rebalanceValue % banks.length ? 1 : 0);
  });
}

const cycle = banks => {
  const seens = new Set();
  let count = 0;
  let balanced = banks;

  while (count += 1) {
    balanced = balance(balanced);
    const fingerprint = balanced.join('|');
    if (seens.has(fingerprint))
      break;
    seens.add(fingerprint);
  }

  return {balanced, count};
}

process.stdin.on('end', () => {
  const res = cycle(input);

  if (process.argv[2] === 'a') {
    process.stdout.write(String(res.count));
  }

  else {
    process.stdout.write(String(cycle(res.balanced).count - 1));
  }
});
