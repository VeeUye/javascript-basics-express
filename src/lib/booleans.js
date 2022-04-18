function negate(a) {
  return !a;
}

function both(a, b) {
  //   if (a === true && b === true) {
  //     return true;
  //   }
  //   return false;
  // }
  return a === true && b === true;
}

function either(a, b) {
  if (a === true || b === true) {
    return true;
  } else {
    return false;
  }
}

function none(a, b) {
  if (a === false && b === false) {
    return true;
  } else {
    return false;
  }
}

function one(a, b) {
  if (a === true && b === false) {
    return true;
  } else if (a === false && b === true) {
    return true;
  } else {
    return false;
  }
}

function truthiness(a) {
  return Boolean(a);
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
}

function isOdd(a) {
  let remainder = a % 2;
  if (remainder === 0) {
    return false;
  } else {
    return true;
  }
}

function isEven(a) {
  let remainder = a % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

function isSquare(a) {
  if (a >= 0 && Number.isInteger(Math.sqrt(a))) {
    return true;
  } else {
    return false;
  }
}

function startsWith(char, string) {
  if (string[0] === char) {
    return true;
  } else {
    return false;
  }
}

function containsVowels(string) {
  // return /[a-z]*[aeiou][a-z]*/i.test(string);
  return /[aeiou]/i.test(string);
  // return string.toLowerCase().includes('a', 'e', 'i', 'o', 'u');
}

function isLowerCase(string) {
  // if (string.toLowerCase() === string) {
  //   return true;
  // } else {
  //   return false;
  // }
  //   let a;
  //   string.toLowerCase() === string ? (a = true) : (a = false);
  //   return a;
  // }
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
  isLowerCase
};
