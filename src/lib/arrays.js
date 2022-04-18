const getNthElement = (index, array) => {
  // if (index === array.length
  // return array.at(index);

  // if (index > array.length - 1) {
  //   index -= array.length;
  // }
  // return array[index];

  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return Array.from(string.replace(/,/g, ''));
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return [...array, element];
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(',');
};

const uppercaseWordsInArray = strings => {
  return strings.map(strings2 => strings2.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings
    .toString()
    .split('')
    .reverse()
    .join('')
    .split(',')
    .reverse();
};

const onlyEven = numbers => {
  return numbers.filter(function(num) {
    return num % 2 === 0;
  });
};

const removeNthElement2 = (index, array) => {
  return array.slice(0, index).concat(array.slice(index + 1));
};

function elementsStartingWithAVowel(strings) {
  // strings.filter(/^[aeiou]/i.test(strings));
  return strings.filter(e => /^[aeiou]/i.test(e));
  // /[aeiou]/i.test(string);
}

const removeSpaces = string => {
  console.log(string.replace(/\s/g, ''));
  return string.replace(/\s/g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
};

const sortByLastLetter = strings => {
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
