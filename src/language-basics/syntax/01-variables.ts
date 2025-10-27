// Basic variable declaration in TypeScript

// let - mutable variable
let counter = 0;
counter = 1;

// const immutable binding
const maxValue = 100;
// maxValue = 200; // Error - connot reassign

// Block scoping
{
  let x = 1;
  const y = 2;
  // x and y only exist in this block
}

// console.log(x); // Error - x is not defined outside the block

// Temporal dead zone
// console.log(later); // Error - cannot access before initialization
let later = 10;
