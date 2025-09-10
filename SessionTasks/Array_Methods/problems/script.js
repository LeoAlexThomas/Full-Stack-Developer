// 1. [mangoe, orange, apple] add the word S to end of each string.
// 2. [10,11,12,89,35,156,199,25,32,87] Find the numbers which are greater than 80 from given array.
// 3. [10,12,15,16,8,11] Find the largest/ greates number in an array.

const fruits = ["mango", "orange", "apple"];

// Without map method
let addedSInFruits = [];
for (let i = 0; i <= fruits.length - 1; i++) {
  addedSInFruits.push(fruits[i] + "s");
}

// Map method with normal function
function addingSAtEnding(fruit) {
  return fruit + "s";
}

const addedSInFruitsWithFunction = fruits.map(addingSAtEnding);

// Map Method with anonyms function return
const addedSInFruitsAnonymsFunctionReturn = fruits.map(function (fruit) {
  return fruit + "s";
});

// Map Method with Normal Arrow Return
const addedSInFruitsNormalReturn = fruits.map((fruit) => {
  return fruit + "s";
});

// Map Method with Single line Arrow Return
const addedSInFruitsSingleLine = fruits.map((fruit) => fruit + "s");

console.log(addedSInFruits);
console.log(addedSInFruitsWithFunction);
console.log(addedSInFruitsAnonymsFunctionReturn);
console.log(addedSInFruitsNormalReturn);
console.log(addedSInFruitsSingleLine);

const numbers = [10, 11, 12, 89, 35, 156, 199, 25, 32, 87];

// Without filter method
let greaterThan80 = [];
for (let i = 0; i <= numbers.length - 1; i++) {
  if (numbers[i] > 80) {
    greaterThan80.push(numbers[i]);
  }
}

// Filter Method with normal function
const greaterThan80WithFunction = function (num) {
  return num > 80;
};
const greaterThan80WithFunctionReturn = numbers.filter(
  greaterThan80WithFunction
);

// Filter Method with anonyms function return
const greaterThan80WithAnonymsFunctionReturn = numbers.filter(function (num) {
  return num > 80;
});

// Filter Method with Normal Arrow Return
const greaterThan80WithNormalReturn = numbers.filter((num) => {
  return num > 80;
});

// Filter Method with Single line Arrow Return
const greaterThan80WithSingleLine = numbers.filter((num) => num > 80);

console.log(greaterThan80);
console.log(greaterThan80WithFunctionReturn);
console.log(greaterThan80WithAnonymsFunctionReturn);
console.log(greaterThan80WithNormalReturn);
console.log(greaterThan80WithSingleLine);

const numbers2 = [10, 12, 15, 16, 8, 11];

const greatestNumber = numbers2.reduce(
  (max, current) => (max > current ? max : current),
  0
);

console.log(greatestNumber);
