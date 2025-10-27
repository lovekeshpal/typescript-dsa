// Basic type annotations in TypeScript

// Basic type annotations
let personName: string = "Alice";
let age: number = 25;
let isActive: boolean = true;
let nullableValue: null = null;
let undefinedValue: undefined = undefined;

// Array type annotations
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// Object type annotations
let person: {
  name: string;
  age: number;
} = {
  name: "Bob",
  age: 30,
};

// Function type annotations
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameters
function greet(name: string, greeting?: string): string {
  return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}

// Union types
let id: string | number = "abc123";
id = 123; // OK - can be either string or number
