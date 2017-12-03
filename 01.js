const input = [];

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null)
    input.push(...chunk.trim().split(''));
});

function computeSum(nextItem) {
  return input.reduce((sum, v, idx, arr) => {
    if (v == nextItem(arr, idx))
      sum += Number(v);
    return sum;
  }, 0);
}

const a = () => computeSum((arr, idx) => arr[(idx + 1) % arr.length]);
const b = () => computeSum((arr, idx) => arr[(idx + arr.length / 2) % arr.length]);

process.stdin.on('end', () => {
  const result = process.argv[2] === 'a' ? String(a()) : String(b());
  process.stdout.write(result);
});
