const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
let ages = [];

let findTheOldest = function (people) {
  people.map((a) => {
    let age = a.yearOfBirth;
    ages.push(age);
  });
  //console.log(ages);

  let oldest = ages.sort((a, b) => a - b)[0];
  //console.log(oldest);

  let filtered = people.filter((a) => {
    return a.yearOfBirth + oldest   
  });
  return filtered[2];
};

module.exports = findTheOldest;
