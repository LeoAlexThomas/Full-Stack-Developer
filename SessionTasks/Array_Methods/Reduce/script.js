// Reduce method example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const sum = numbers.reduce((acc, val) => acc + val);

const multiply = numbers.reduce((acc, val) => acc * val);

console.log(sum);

console.log(multiply);
