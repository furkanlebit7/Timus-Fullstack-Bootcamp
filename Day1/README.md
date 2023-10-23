# Day 1 Homework

## 📅 History of Javascript

#### 1995 - Birth of JavaScript:

JavaScript was created by Brendan Eich in just 10 days while working at Netscape Communications. It was initially called "Mocha" and later renamed "LiveScript."

#### 1996 - JavaScript 1.1

Netscape introduced JavaScript 1.1 with several enhancements. It gained popularity as a client-side scripting language for web development.

#### 1997 - ECMAScript Standardization

Netscape submitted JavaScript to the Ecma International organization for standardization. This led to the creation of ECMAScript, the standardized specification for JavaScript.

#### 1999 - ECMAScript 3

ECMAScript 3 was released, bringing many important features, making it the foundation for modern JavaScript.

#### 2005 - AJAX Revolution

The term AJAX (Asynchronous JavaScript and XML) was coined, highlighting the use of JavaScript for creating interactive web applications without full page reloads. This marked a significant turning point in web development.

#### 2006 - ECMAScript 4 Abandoned

A proposed major update to ECMAScript, known as ECMAScript 4, was abandoned due to disagreements within the community. This led to a focus on smaller, incremental updates.

#### 2009 - ECMAScript 5

ECMAScript 5 was released with new features and improvements, making JavaScript a more robust and versatile language.

#### 2015 - ECMAScript 6 (ES2015)

This major update introduced several new features, including arrow functions, classes, and the let and const keywords. It marked a significant step forward in JavaScript's evolution.

#### 2017 - ECMAScript 8 (ES2017)

ES2017 brought new features like async/await for handling asynchronous code more elegantly, and improvements to regular expressions.

#### 2020 - ECMAScript 11 (ES2020)

The latest major update at the time of my last knowledge update brought features like optional chaining and nullish coalescing operators, improving JavaScript's expressiveness and error handling.

###

## 🗝️ Var, Let, and Const – What's the Difference?

- **_var_** and **_let_** create variables that can be **_reassigned_** another value.
- **_const_** creates "**_constant_**" variables that cannot be reassigned another value.
- developers shouldn't use **_var_** anymore. They should use **_let_** or **_const_** instead.
- if you're not going to change the value of a variable, it is good practice to use **_const_**.

To analyze the differences between these keywords, We'll be using three factors:

- Scope of variables
- Redeclaration and reassignment
- Hoisting

#### Scope of variables

The scope of a variable defines where in your code that variable can be accessed or modified. Variables can have local scope, limited to a specific block or function, or global scope, accessible from anywhere in the code.

#### Redeclaration and reassignment

Redeclaring a variable within the same scope is generally not allowed in JavaScript, but variables can be reassigned new values. However, if a variable is declared using **_let_** or **_const_**, it can't be redeclared within the same scope.

#### Hoisting

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation. This allows you to use variables or functions before they're actually declared in your code, but it's essential to understand how hoisting works to prevent unexpected behavior.

| Keywords    | Scope           | Redeclare | Reassign | Hoisted |
| :---------- | :-------------- | :-------- | -------- | ------- |
| **_var_**   | Global or Local | Yes       | Yes      | Yes     |
| **_const_** | Block           | No        | No       | No      |
| **_let_**   | Block           | No        | Yes      | No      |

###

## 🧮 JavaScript Array Methods

### Section 1 &#8594; Array properties

#### &#8594; length property

```javascript
let colors = ["red", "green", "blue"];

console.log(colors.length); // 3
```

### Section 2 &#8594; Adding / removing elements

#### &#8594; push()

```javascript
let numbers = [10, 20, 30];

const length = numbers.push(40);

console.log(length); // 4
console.log(numbers); // [ 10, 20, 30, 40 ]
```

#### &#8594; unshift()

```javascript
let numbers = [10, 20, 30];

const length = numbers.unshift(0);

console.log(length); // 5
console.log(numbers); // [ 0, 10, 20, 30 ]
```

#### &#8594; pop()

```javascript
let numbers = [10, 20, 30];

const item = numbers.pop();

console.log(item); // 30
console.log(numbers); // [ 10, 20 ]
```

#### &#8594; shift()

```javascript
let numbers = [10, 20, 30];

const item = numbers.shift();

console.log(item); // 10
console.log(numbers); // [ 20, 30 ]
```

#### &#8594; splice()

```javascript
DELETE;
let scores = [1, 2, 3, 4, 5];

let deletedScores = scores.splice(0, 3);

console.log(scores); //  [4, 5]
console.log(deletedScores); // [1, 2, 3]

INSERT;
let colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");

console.log(colors); // ["red", "green", "purple", "blue"]

UPDATE;
let languages = ["C", "C++", "Java", "JavaScript"];

languages.splice(1, 1, "Python");

console.log(languages);
// ["C", "Python", "Java", "JavaScript"]
```

#### &#8594; slice()

```javascript
let colors = ["red", "green", "blue", "yellow", "purple"];

let rgb = colors.slice(0, 3);

console.log(rgb); // ["red", "green", "blue"]
```

### Section 3 &#8594; Finding elements

#### &#8594; indexOf()

```javascript
let scores = [10, 20, 30, 10, 40, 20];

console.log(scores.indexOf(10)); // 0
console.log(scores.indexOf(30)); // 2
console.log(scores.indexOf(50)); // -1
console.log(scores.indexOf(20)); // 1
```

#### &#8594; includes()

```javascript
let numbers = [1, 2, 3];

numbers.includes(2); // true
numbers.includes(4); // false
numbers.includes(1, 1); // false
```

#### &#8594; find()

```javascript
let customers = [
  {
    name: "ABC Inc",
    credit: 100,
  },
  {
    name: "ACME Corp",
    credit: 200,
  },
  {
    name: "IoT AG",
    credit: 300,
  },
];

console.log(customers.find((c) => c.credit > 100));
//{ name: 'ACME Corp', credit: 200 }
```

#### &#8594; findIndex()

```javascript
let ranks = [1, 5, 7, 8, 10, 7];

let index = ranks.findIndex((rank) => rank === 7);

console.log(index); // 2
```

### Section 4 &#8594; High-order methods

#### &#8594; map()

```javascript
let circles = [10, 30, 50];

let areas = []; // to store areas of circles
let area = 0;
for (let i = 0; i < circles.length; i++) {
  area = Math.floor(Math.PI * circles[i] * circles[i]);
  areas.push(area);
}

console.log(areas); // [314, 2827, 7853]
```

#### &#8594; filter()

```javascript
let cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];

let bigCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i].population > 3000000) {
    bigCities.push(cities[i]);
  }
}
console.log(bigCities);
/* [
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 }
] */
```

#### &#8594; reduce()

```javascript
let numbers = [1, 2, 3];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // 6
```

#### &#8594; every()

```javascript
let numbers = [1, 3, 5];

let result = true;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 0) {
    result = false;
    break;
  }
}
console.log(result); // true
```

#### &#8594; some()

```javascript
let marks = [4, 5, 7, 9, 10, 3];

let lessThanFive = false;

for (let index = 0; index < marks.length; index++) {
  if (marks[index] < 5) {
    lessThanFive = true;
    break;
  }
}

console.log(lessThanFive); // true
```

#### &#8594; sort()

```javascript
let numbers = [11, 2, 34, 53, 73, 33, 42, 1];

let sorted = numbers.sort((a, b) => a - b);
let reversSorted = numbers.sort((a, b) => b - a);

console.log(sorted); // [1, 2, 11, 33, 34, 42, 53, 73]
console.log(reversSorted); // [73, 53, 42, 34, 33, 11, 2, 1]
```

#### &#8594; forEach()

```javascript
let ranks = ["A", "B", "C"];
for (let i = 0; i < ranks.length; i++) {
  console.log(ranks[i]);
}

//A
//B
//C
```

### Section 5 &#8594; Manipulating Arrays

#### &#8594; concat()

```javascript
let odds = [1, 3, 5];
let evens = [2, 4, 6];

let combined = odds.concat(evens);

console.log(combined); // [ 1, 3, 5, 2, 4, 6 ]
```

### Section 6 &#8594; Creating Arrays

#### &#8594; of()

```javascript
let chars = Array.of("A", "B", "C");

console.log(chars.length); // 3
console.log(chars); // ['A','B','C']
```

#### &#8594; from()

```javascript
console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
```

### Section 7 &#8594; Flattening arrays

#### &#8594; flat()

```javascript
const numbers = [1, 2, [3, 4, 5]];
const flatNumbers = numbers.flat();

console.log(flatNumbers); // [1, 2, 3, 4, 5]
```

#### &#8594; flatMap()

```javascript
var arr = [1, 2, 3, 4];

arr.flatMap((x) => [x, x * 2]);
// is equivalent to

arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
// [1, 2, 2, 4, 3, 6, 4, 8]
```

### Section 8 &#8594; Arrays to Strings

#### &#8594; flat()

```javascript
const cssClasses = ["btn", "btn-primary", "btn-active"];
const btnClass = cssClasses.join(" ");

console.log(btnClass); // "btn btn-primary btn-active"
```

### Section 9 &#8594; Advanced Operations

#### &#8594; Destructuring

```javascript
function getScores() {
  return [70, 80, 90];
}

let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90
```

#### &#8594; Spread Operator

```javascript
const odd = [1, 3, 5];
const combined = [2, 4, 6, ...odd];

console.log(combined); // [ 2, 4, 6, 1, 3, 5 ]
```

#### &#8594; Rest parameters
```javascript
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}
console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10
```
[Differences about rest parameter and spread operator](https://medium.com/@yetkinkrsngr/nedir-ulan-bu-js-seri-rest-parametresi-ve-spread-operator%C3%BC-e30ed7164a4)

### Section 10 &#8594; Accesing elements

#### &#8594; at()

```javascript
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(
  `Using an index of ${index} the item returned is ${array1.at(index)}`
);
// expected output: "Using an index of 2 the item returned is 8"
```

### Section 11 &#8594; Multidimensional Array

#### &#8594; Multidimensional Array

```javascript
let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];
console.log(activities);
┌─────────┬─────────────┬───┐
│ (index) │      0      │ 1 │
├─────────┼─────────────┼───┤
│    0    │   'Work'    │ 9 │
│    1    │    'Eat'    │ 1 │
│    2    │  'Commute'  │ 2 │
│    3    │ 'Play Game' │ 1 │
│    4    │   'Sleep'   │ 7 │
└─────────┴─────────────┴───┘
```

## 👩‍💻 FizzBuzz

```javascript
Array(100)
  .fill(0)
  .forEach((x, index) => {
    if (index % 5 === 0 && index % 3 === 0) {
      console.log("FizzBuzz");
    } else if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(index);
    }
  });
```

**_NOTE :_** _If we check 5 before 3 in the if else block, it will cause more cost._
