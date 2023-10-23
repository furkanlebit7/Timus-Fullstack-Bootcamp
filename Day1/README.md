## 🧮 JavaScript Array Methods

### Section 1 &#8594; Array properties

#### &#8594; length property

```javascript
let colors = ["red", "green", "blue"];

console.log(colors.length); // 3
```

### Section 2 &#8594; Adding / removing elements

#### &#8594; push()

```
let numbers = [10, 20, 30];

const length = numbers.push(40);

console.log(length); // 4
console.log(numbers); // [ 10, 20, 30, 40 ]
```

#### &#8594; unshift()

```
let numbers = [10, 20, 30];

const length = numbers.unshift(0);

console.log(length); // 5
console.log(numbers); // [ 0, 10, 20, 30 ]
```

#### &#8594; pop()

```
let numbers = [10, 20, 30];

const item = numbers.pop();

console.log(item); // 30
console.log(numbers); // [ 10, 20 ]
```

#### &#8594; shift()

```
let numbers = [10, 20, 30];

const item = numbers.shift();

console.log(item); // 10
console.log(numbers); // [ 20, 30 ]
```

#### &#8594; splice()

```
DELETE
let scores = [1, 2, 3, 4, 5];

let deletedScores = scores.splice(0, 3);

console.log(scores); //  [4, 5]
console.log(deletedScores); // [1, 2, 3]


INSERT
let colors = ['red', 'green', 'blue'];

colors.splice(2, 0, 'purple');

console.log(colors); // ["red", "green", "purple", "blue"]


UPDATE
let languages = ['C', 'C++', 'Java', 'JavaScript'];

languages.splice(1, 1, 'Python');

console.log(languages);
// ["C", "Python", "Java", "JavaScript"]
```

#### &#8594; slice()

```
let colors = ['red','green','blue','yellow','purple'];

let rgb = colors.slice(0,3);

console.log(rgb); // ["red", "green", "blue"]
```

### Section 3 &#8594; Finding elements

#### &#8594; indexOf()

```
let scores = [10, 20, 30, 10, 40, 20];

console.log(scores.indexOf(10)); // 0
console.log(scores.indexOf(30)); // 2
console.log(scores.indexOf(50)); // -1
console.log(scores.indexOf(20)); // 1
```

#### &#8594; includes()

```
let numbers = [1,2,3];

numbers.includes(2); // true
numbers.includes(4); // false
numbers.includes(1,1); // false
```

#### &#8594; find()

```
let customers = [{
    name: 'ABC Inc',
    credit: 100
}, {
    name: 'ACME Corp',
    credit: 200
}, {
    name: 'IoT AG',
    credit: 300
}];

console.log(customers.find(c => c.credit > 100));
//{ name: 'ACME Corp', credit: 200 }
```

#### &#8594; findIndex()

```
let ranks = [1, 5, 7, 8, 10, 7];

let index = ranks.findIndex(rank => rank === 7);

console.log(index); // 2
```
