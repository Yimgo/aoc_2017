const _ = require('lodash');

const input = Number(process.argv[3]);

const getSteps = (n) => {
	const verticalSteps = Math.ceil(Math.sqrt(n) / 2);
	return Math.abs((n - Math.pow(2 * verticalSteps - 1, 2)) % (2 * verticalSteps));
}

function* move() {
	let x = 0;
	let y = 0;
	let stepSize = 1;

	const moves = [() => ++x, () => ++y, () => --x, () => --y];
	while (true) {
		for (let move of moves) {
			for (let i = 0; i < stepSize; i += 1, move()) {
				yield [x, y];
			}
			if (moves.indexOf(move) % 2 !== 0) {
				stepSize++;
			}
		}
	}
}

function yieldToFutureNeighbor(grid, x, y, v) {
	const key = `${x};${y}`;
	if (grid.get(key) === undefined)
		grid.set(key, {yields: []});
	else if (grid.get(key).val !== undefined)
		return;

	grid.get(key).yields.push(v);
}

function yieldToFutureNeighbors(grid, x, y, v) {
	yieldToFutureNeighbor(grid, x + 1, y, v);
	yieldToFutureNeighbor(grid, x + 1, y + 1, v);
	yieldToFutureNeighbor(grid, x, y + 1, v);
	yieldToFutureNeighbor(grid, x - 1, y + 1, v);
	yieldToFutureNeighbor(grid, x - 1, y, v);
	yieldToFutureNeighbor(grid, x - 1, y - 1, v);
	yieldToFutureNeighbor(grid, x, y - 1, v);
	yieldToFutureNeighbor(grid, x + 1, y - 1, v);
}

if (process.argv[2] === 'a')
	process.stdout.write(String(getSteps(input)));
else {
	const grid = new Map();
	const get = (x, y) => grid.get(`${x};${y}`);
	const set = (x, y, v) => grid.set(`${x};${y}`, v);
	let [x, y] = move().next().value;

	set(x, y, {val: 1});
	yieldToFutureNeighbors(grid, x, y, 1);

	for (let m of move()) {
		[x, y] = m;
		const val = _.sum(get(x, y).yields);
		if (val > input) {
			process.stdout.write(String(val));
			process.exit();
		}
		grid.set(x, y, {val});
		yieldToFutureNeighbors(grid, x, y, val);
	}
}
