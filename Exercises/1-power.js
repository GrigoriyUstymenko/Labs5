'use strict';

// Define function power - an alias to Math.pow().
const power = Math.pow;

// Implement function `square(n)`, which returns square of its argument.
// The function may or may not reuse function `power`.
const square = n => power(n, 2);

// Implement function `cube(n)` using partial application
// The function should return power of three for the given argument.
const cube =  power.bind(null, 3);

module.exports = { power, square, cube };

/*
'use strict';

const power = pow => num => Math.pow(num, pow);

const square = power(2);

const cube = power(3);

 */
