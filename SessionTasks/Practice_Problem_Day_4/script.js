// Practice Problem Day 4

//Problem 1: print the numbers from 1 to 100 with the interval of 10

for (let i = 1; i <= 100; i = i + 10) {
  console.log(i);
}

//Problem 2: print the number from 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Problem 3: print the multiple of 2 until 10
for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}

//Problem 4: print the number from 100 to 1 with the difference of 10.
for (let i = 100; i >= 1; i = i - 10) {
  console.log(i);
}

/*Problem 5: write a function to print the eligble, Not eligble voters separately from the list
 of array [18,17,16,15,10,8,7,9,35,40,86,75,0]. Note: print invalid if the voter age is 0.*/

var arr = [18, 17, 16, 15, 10, 8, 7, 9, 35, 40, 86, 75, 0];
var eligibleVoters = [];
var notEligibleVoters = [];
var invalidAges = [];

function checkVoterEligibility(ages) {
  for (var i = 0; i < ages.length; i++) {
    if (ages[i] === 0) {
      invalidAges.push(ages[i]);
    } else if (ages[i] >= 18) {
      eligibleVoters.push(ages[i]);
    } else {
      notEligibleVoters.push(ages[i]);
    }
  }
  return {
    eligibleVoters: eligibleVoters,
    notEligibleVoters: notEligibleVoters,
    invalidAges: invalidAges,
  };
}

console.log(checkVoterEligibility(arr));
