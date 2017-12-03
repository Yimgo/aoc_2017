.PHONY: 01a 01b

01a: 01.js 01input.txt
	node 01.js a < 01input.txt

01b: 01.js 01input.txt
	node 01.js b < 01input.txt
