'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Define function curry that accepts the length of the function
// (amount of function arguments) and the function.

const curry = (length, fn, ...args1) => (...args) => {
  args = args1.concat(args);
  if (length > args.length) {
    return curry(length, fn, ...args);
  } else {
    return fn(...args);
  }
};


/*
const curry = (length, fn) => (...args) => {
  if (length > args.length) {
    length -= args.length;
    const f = fn.bind(null, ...args);
    return curry(length, f);
  } else {
    return fn(...args);
  }
};
*/


// Allows to enter pin code by one character,
// Usage: press('3')('4')('5')('6')
const press = curry(4, checkPin);
//const press = a  => () => press(a);

//press('3')('4')('5')('6');

//console.log(typeof press('1')('2') === 'function');

module.exports = { press };
