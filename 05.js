const _ = require('lodash');

let input = [];

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    input.push(...chunk.split('\n').map(v => Number.parseInt(v, 10)));
  }
});

const escape = (offsets, strange) => {
  let offset = 0;
  let count = 0;

  while (offset < offsets.length) {
    const oldOffset = offset;
    offset += offsets[oldOffset];
    if (strange && offsets[oldOffset] >= 3) {
      offsets[oldOffset] -= 1;
    } else {
      offsets[oldOffset] += 1;
    }
    count += 1;
  }

  return count - 1;
};

process.stdin.on('end', () => {
  if (process.argv[2] === 'a') {
    process.stdout.write(String(escape(input, false)));
  } else {
    process.stdout.write(String(escape(input, true)));
  }
});
