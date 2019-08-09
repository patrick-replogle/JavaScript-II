// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

//example 1: 
const name1 = "Dave";

function reference(){
  return `I am ${name1}`;
}

console.log(reference());

//example 2:

function first(){
  const name = "Patrick";
  console.log(`I am ${name}`);
  debugger;

  function second(){
    console.log(`I am also ${name}`);
    debugger; 
  }
  second();
}

console.log(first());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====

var counter = (function () {
  var newCounter = 0;
  return function () {
    newCounter += 1; 
    return newCounter;
  }
})();

counter();
counter();
counter();
// Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {


  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
