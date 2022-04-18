const createPerson = (name, age) => {
  const obj = { name, age };
  return obj;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return property in object;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(object => object.age);
};

const findByName = (name, people) => {
  return people.find(object => object.name === name);
};

const findHondas = cars => {
  return cars.filter(object => {
    return object.manufacturer === 'Honda';
  });
};

const averageAge = people => {
  const arr = Object.values(people);
  const sum = (accumulator, obj) => accumulator + obj.age;
  const avg = arr.reduce(sum, 0) / arr.length;
  return avg;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
    introduce(newFriend) {
      return `Hi ${newFriend}, my name is ${person.name} and I am ${person.age}!`;
    }
  };
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
