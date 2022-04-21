function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !a && !b;
}

function one(a, b) {
  return a !== b;
}

function truthiness(a) {
  return Boolean(a);
}

function isEqual(a, b) {
  return a === b;
}

function isGreaterThan(a, b) {
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
}

function isOdd(a) {
  const remainder = a % 2;
  return remainder !== 0;
}

function isEven(a) {
  const remainder = a % 2;
  return remainder === 0;
}

function isSquare(a) {
  return a >= 0 && Number.isInteger(Math.sqrt(a));
}

function startsWith(char, string) {
  return string[0] === char;
}

function containsVowels(string) {
  return /[aeiou]/i.test(string);
}

function isLowerCase(string) {
  return string.toLowerCase() === string;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
