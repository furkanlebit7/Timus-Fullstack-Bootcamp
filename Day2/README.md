# Day 2 Homework

## 🗝️ JavaScript if, else, and else if

- Use **_if_** to specify a block of code to be executed, if a specified condition is **_true_**
- Use **_else_** to specify a block of code to be executed, if the same condition is **_false_**
- Use **_else if_** to specify a new condition to test, if the first condition is **_false_**

```javascript
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

###

## ♻️ Recursive Functions

- A recursive function is a function that calls itself until it doesn’t. This technique is called recursion.

Suppose that you have a function called recurse(). The recurse() is a recursive function if it calls itself inside its body, like this:

```javascript
function recurse() {
  if (condition) {
    // stop calling itself
    //...
  } else {
    recurse();
  }
}
```

###

## 🪄 JavaScript Object Methods

#### &#8594; Object.keys()

```javascript
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
```

#### &#8594; Object.values()

```javascript
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
```

#### &#8594; Object.entries()

```javascript
const object1 = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
// "b: 42"
```

#### &#8594; Object.assign()

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
```

#### &#8594; Object.prototype.hasOwnProperty()

```javascript
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty("property1"));
// Expected output: true

console.log(object1.hasOwnProperty("toString"));
// Expected output: false

console.log(object1.hasOwnProperty("hasOwnProperty"));
// Expected output: false
```

#### &#8594; Object.is()

```javascript
console.log(Object.is("1", 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj = {};
console.log(Object.is(obj, {}));
// Expected output: false
```

#### &#8594; Object.defineProperties()

```javascript
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);
// Expected output: 42
```

#### &#8594; Object.getOwnPropertyDescriptor()

```javascript
const object1 = {
  property1: 42,
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, "property1");

console.log(descriptor1.configurable);
// Expected output: true

console.log(descriptor1.value);
// Expected output: 42
```

#### &#8594; Object.getOwnPropertyNames()

```javascript
const object1 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object1));
// Expected output: Array ["a", "b", "c"]
```

#### &#8594; Object.getOwnPropertySymbols()

```javascript
const object1 = {};
const a = Symbol("a");
const b = Symbol.for("b");

object1[a] = "localSymbol";
object1[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(object1);

console.log(objectSymbols.length);
// Expected output: 2
// Expected output: Array ["a", "b", "c"]
```

###

## 📇 Javascript Copy Ways to Object

#### &#8594; Assignment (=) - Shallow Copy:

```javascript
const originalObject = { key: "value" };
const shallowCopy = originalObject;
```

#### &#8594; Object.assign() - Shallow Copy:

```javascript
const originalObject = { key: "value" };
const shallowCopy = Object.assign({}, originalObject);
```

#### &#8594; Spread Operator ({...}) - Shallow Copy:

```javascript
const originalObject = { key: "value" };
const shallowCopy = { ...originalObject };
```

#### &#8594; JSON Methods - Deep Copy (with limitations):

```javascript
const originalObject = { key: "value" };
const deepCopy = JSON.parse(JSON.stringify(originalObject));
```

#### &#8594; `lodash.cloneDeep() - Deep Copy:

```javascript
const _ = require("lodash");
const originalObject = { key: "value" };
const deepCopy = _.cloneDeep(originalObject);
```

###

## 🪥 Other JavaScript Object Methods

#### &#8594; Object.freeze()

```javascript
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42
```

#### &#8594; Object.seal()

```javascript
const object1 = {
  property1: 42,
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// Expected output: 33

delete object1.property1; // Cannot delete when sealed
console.log(object1.property1);
// Expected output: 33
```

###

## 🥅 JavaScript Classes

#### &#8594; Defining classes

- Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.

```javascript
const obj = {
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

#### &#8594; Constructor

- The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class — a SyntaxError is thrown if the class contains more than one occurrence of a constructor method.

- A constructor can use the super keyword to call the constructor of the super class.

You can create instance properties inside the constructor:

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

#### &#8594; Methods

- Methods are defined on the prototype of each class instance and are shared by all instances. Methods can be plain functions, async functions, generator functions, or async generator functions. For more information, see method definitions.

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
```

### &#8594; Inheritance

- The extends keyword is used in class declarations or class expressions to create a class as a child of another constructor (either a class or a function).

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
```

- If there is a constructor present in the subclass, it needs to first call super() before using this. The super keyword can also be used to call corresponding methods of super class.

```javascript
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
```

### &#8594; Getter and Setter

#### Get

The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.

```javascript
const obj = {
  log: ["a", "b", "c"],
  get latest() {
    return this.log[this.log.length - 1];
  },
};

console.log(obj.latest);
// Expected output: "c"
```

#### Set

The set syntax binds an object property to a function to be called when there is an attempt to set that property. It can also be used in classes.

```javascript
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
language.current = "FA";

console.log(language.log);
// Expected output: Array ["EN", "FA"]
```

###

## 🧊 What is Synchronous and Asynchronous in JavaScript?

### What is Synchronous in JavaScript?

#### &#8594; Defining classes

As its base JavaScript language is synchronous. Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

See the following code example of synchronous JavaScript.

Code Example -

```javascript
console.log("First");
console.log("Second");
console.log("Third");

// Output -

First;
Second;
Third;
```

### What is Asynchronous in JavaScript?

#### &#8594; Defining classes

As we saw in the synchronous code example, all instructions in the program execute one after another, and every instruction waits for its previous instruction to get executed. Due to this nature of synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the user interface. Asynchronous code execution allows to execution next instructions immediately and doesn't block the flow because of previous instructions.

See the following coding example to understand how javascript works asynchronously.

Code Example -

```javascript
console.log("First");

// Set timeout for 2 seconds
setTimeout(() => console.log("Second"), 2000);

console.log("Third");

// Output -

First;
Third;
Second;
```

As we can see in the output of the above code example, Third gets printed before Second, because of the asynchronous execution of the code. Here setTimeout() function waits for 2 seconds, and in the meantime, the next instruction gets executed without waiting for the previous one to complete the execution.

###

## 📲 JavaScript Callbacks

Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished:

```javascript
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```

## 🎃 JavaScript Promise Object

A JavaScript Promise object contains both the producing code and calls to the consuming code:

```javascript
let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject(); // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  }
);
```

#### &#8594; Promise:

A Promise represents a value that may not be available yet but will be at some point in the future. You can create a Promise for an asynchronous operation, and it can be in one of three states: pending, fulfilled (resolved), or rejected.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Operation succeeded");
    } else {
      reject("Operation failed");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result); // Operation succeeded
  })
  .catch((error) => {
    console.error(error); // Operation failed
  });
```

#### &#8594; Promise.all():

Promise.all() takes an iterable (e.g., an array) of promises and returns a new promise that fulfills when all of the input promises have fulfilled or rejects when any of the input promises reject.

```javascript
const promise1 = fetch("https://api.example.com/data/1");
const promise2 = fetch("https://api.example.com/data/2");
const promise3 = fetch("https://api.example.com/data/3");

Promise.all([promise1, promise2, promise3])
  .then((responses) => {
    // Process responses from all promises
  })
  .catch((error) => {
    // Handle the first rejection encountered
  });
```

#### &#8594; Promise.allSettled():

Promise.allSettled() is similar to Promise.all(), but it waits for all promises to settle (either fulfill or reject) and returns an array of objects representing the status of each promise.

```javascript
const promise1 = fetch("https://api.example.com/data/1");
const promise2 = fetch("https://api.example.com/data/2");

Promise.allSettled([promise1, promise2]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Fulfilled:", result.value);
    } else if (result.status === "rejected") {
      console.error("Rejected:", result.reason);
    }
  });
});
```
