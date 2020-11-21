'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;

// Define function tagDate that prepends current date to the string.
// E.g. tagDate('My String') === '[2019-11-14] My String'
// Use function tagged to implement tagDate.

const tagDate = stringulart => {
  const date = new Date();
  const dateUTC = date.toISOString();
  const subDateUTC = dateUTC.substring(0, 10);
  return tagged(subDateUTC, stringulart);
};

module.exports = { tagDate };
