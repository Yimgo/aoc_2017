.PHONY: 01a 01b 02a 02b

01a: 01.js 01input.txt
	node 01.js a < 01input.txt

01b: 01.js 01input.txt
	node 01.js b < 01input.txt

02a: 02.js 02input.txt
	node 02.js a < 02input.txt

02b: 02.js 02input.txt
	node 02.js b < 02input.txt
