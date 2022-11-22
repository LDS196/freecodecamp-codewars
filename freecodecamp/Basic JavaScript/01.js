function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 1:
    answer = 'alpha';
    break;
  case 2:
    answer = 'beta';
    break;
  case 3:
    answer = 'gamma';
      break;  
  case 4:
    answer = 'delta';
    break; 
}

  // Only change code above this line
  return answer;
}

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
case 'a':
 answer = 'apple';
 break;
 case 'b':
 answer = 'bird';
 break;
 case 'c':
 answer = 'cat';
 break;
 default:
 answer = 'stuff';
 break;
}

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
console.log(parseInt('5000021d55'))
function sum(arr, n) {
  // Only change code below this line
 if (n <= 0) {
      return 0;
    } else {
      return +(sum(arr, n - 1)) + +(arr[n - 1]);
    }
  // Only change code above this line
}

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(0, 3))

const myDog = {
  // Only change code below this line
name : '',
legs: 5,
tails: 5,
friends: [],

  // Only change code above this line
};
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    "alpha": "Adams",
    "bravo":"Boston",
    "charlie": "Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank",
  }

  // Only change code above this line
  result = lookup[val]
  return result;
}

phoneticLookup("charlie");