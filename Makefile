.PHONY: 01a 01b 02a 02b 03a 03b 04a 04b 05a 05b 06a 06b

01a: 01.js 01input.txt
	node 01.js a < 01input.txt

01b: 01.js 01input.txt
	node 01.js b < 01input.txt

02a: 02.js 02input.txt
	node 02.js a < 02input.txt

02b: 02.js 02input.txt
	node 02.js b < 02input.txt

03a: 03.js
	node 03.js a 368078

03b: 03.js
	node 03.js b 368078

04a: 04.js
	node 04.js a < 04input.txt

04b: 04.js
	node 04.js b < 04input.txt

05a: 05.js
	node 05.js a < 05input.txt

05b: 05.js
	node 05.js b < 05input.txt

06a: 06.js
	node 06.js a < 06input.txt

06b: 06.js
	node 06.js b < 06input.txt
