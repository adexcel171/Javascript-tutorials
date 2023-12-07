Certainly! Here is a list of some commonly used JavaScript string methods along with examples:

charAt(index):

Returns the character at the specified index in a string.
javascript
Copy code
let str = "Hello, World!";
console.log(str.charAt(0)); // Output: H
charCodeAt(index):

Returns the Unicode value of the character at the specified index.
javascript
Copy code
let str = "Hello, World!";
console.log(str.charCodeAt(0)); // Output: 72 (Unicode for 'H')
concat(str1, str2, ...):

Combines two or more strings and returns a new string.
javascript
Copy code
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // Output: Hello, World!
indexOf(substring, fromIndex):

Returns the index of the first occurrence of a substring, or -1 if not found.
javascript
Copy code
let str = "Hello, World!";
console.log(str.indexOf("World")); // Output: 7
slice(startIndex, endIndex):

Extracts a portion of a string and returns a new string.
javascript
Copy code
let str = "Hello, World!";
console.log(str.slice(0, 5)); // Output: Hello
toUpperCase():

Converts all characters in a string to uppercase.
javascript
Copy code
let str = "Hello, World!";
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
toLowerCase():

Converts all characters in a string to lowercase.
javascript
Copy code
let str = "Hello, World!";
console.log(str.toLowerCase()); // Output: hello, world!
trim():

Removes whitespace from both ends of a string.
javascript
Copy code
let str = "   Hello, World!   ";
console.log(str.trim()); // Output: Hello, World!
replace(searchValue, replaceValue):

Replaces a specified value with another value in a string.
javascript
Copy code
let str = "Hello, World!";
console.log(str.replace("World", "Universe")); // Output: Hello, Universe!
split(separator):

Splits a string into an array of substrings based on a specified separator.
javascript
Copy code
let str = "apple,orange,banana";
let fruits = str.split(",");
console.log(fruits); // Output: ["apple", "orange", "banana"]
These are just a few examples of string methods in JavaScript. There are more methods available, and each serves a specific purpose in manipulating and working with strings.


//--------------------------------------------------- NUmber string---------------------------------------------------------------


It seems like you're asking for JavaScript string methods that specifically deal with numbers. While JavaScript doesn't have methods exclusively for numbers in strings, you can use various general string methods to work with strings containing numbers. Here are some examples:

parseInt(string):

Parses a string and returns an integer.
javascript
Copy code
let numStr = "42";
let num = parseInt(numStr);
console.log(num); // Output: 42
parseFloat(string):

Parses a string and returns a floating-point number.
javascript
Copy code
let floatStr = "3.14";
let floatValue = parseFloat(floatStr);
console.log(floatValue); // Output: 3.14
isNaN(value):

Checks if a value is NaN (Not a Number).
javascript
Copy code
let notANumber = isNaN("Hello");
console.log(notANumber); // Output: true
toFixed(digits):

Formats a number using fixed-point notation with a specified number of digits after the decimal point.
javascript
Copy code
let number = 3.14159;
let formattedNumber = number.toFixed(2);
console.log(formattedNumber); // Output: 3.14
Number(string):

Converts a string to a number.
javascript
Copy code
let numericString = "123";
let numericValue = Number(numericString);
console.log(numericValue); // Output: 123
Remember to handle edge cases appropriately, such as when using parseInt or parseFloat and the string doesn't represent a valid number.

User
give 10 examples of number method
ChatGPT
JavaScript itself does not have a specific set of methods on primitive number values, but there are a variety of methods and functions you can use when working with numbers. Here are ten examples:

Math.abs(x):

Returns the absolute value of a number.
javascript
Copy code
let num = -42;
let absoluteValue = Math.abs(num);
console.log(absoluteValue); // Output: 42
Math.round(x):

Rounds a number to the nearest integer.
javascript
Copy code
let num = 3.8;
let rounded = Math.round(num);
console.log(rounded); // Output: 4
Math.floor(x):

Rounds a number down to the nearest integer.
javascript
Copy code
let num = 5.9;
let roundedDown = Math.floor(num);
console.log(roundedDown); // Output: 5
Math.ceil(x):

Rounds a number up to the nearest integer.
javascript
Copy code
let num = 2.1;
let roundedUp = Math.ceil(num);
console.log(roundedUp); // Output: 3
Math.pow(x, y):

Returns the value of x to the power of y.
javascript
Copy code
let result = Math.pow(2, 3);
console.log(result); // Output: 8
Math.sqrt(x):

Returns the square root of a number.
javascript
Copy code
let num = 25;
let squareRoot = Math.sqrt(num);
console.log(squareRoot); // Output: 5
Number.toFixed(digits):

Formats a number using fixed-point notation with a specified number of digits after the decimal point.
javascript
Copy code
let number = 3.14159;
let formattedNumber = number.toFixed(2);
console.log(formattedNumber); // Output: 3.14
Number.isNaN(value):

Checks if a value is NaN (Not a Number).
javascript
Copy code
let notANumber = isNaN("Hello");
console.log(notANumber); // Output: true
Number.isInteger(value):

Checks if a value is an integer.
javascript
Copy code
let isInteger = Number.isInteger(42);
console.log(isInteger); // Output: true
parseFloat(string):

Parses a string and returns a floating-point number.
javascript
Copy code
let floatStr = "3.14";
let floatValue = parseFloat(floatStr);
console.log(floatValue); // Output: 3.14
These examples cover a range of mathematical operations, formatting, and type-checking methods related to numbers in JavaScript.





// Obeject methods ------------------------------------------------------



Certainly! Here are 15 commonly used JavaScript object methods with detailed examples:

Object.keys(obj):

Returns an array of a given object's own enumerable property names.
javascript
Copy code
let person = { name: 'John', age: 30, job: 'Developer' };
let keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'job']
Object.values(obj):

Returns an array of a given object's own enumerable property values.
javascript
Copy code
let person = { name: 'John', age: 30, job: 'Developer' };
let values = Object.values(person);
console.log(values); // Output: ['John', 30, 'Developer']
Object.entries(obj):

Returns an array of a given object's own enumerable property [key, value] pairs.
javascript
Copy code
let person = { name: 'John', age: 30, job: 'Developer' };
let entries = Object.entries(person);
console.log(entries);
// Output: [['name', 'John'], ['age', 30], ['job', 'Developer']]
Object.assign(target, source1, source2, ...):

Copies the values of all enumerable own properties from one or more source objects to a target object.
javascript
Copy code
let target = { a: 1, b: 2 };
let source = { b: 3, c: 4 };
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 3, c: 4 }
Object.freeze(obj):

Freezes an object, preventing new properties from being added, and existing properties from being removed or modified.
javascript
Copy code
let person = { name: 'John', age: 30 };
Object.freeze(person);
person.age = 31; // This assignment will have no effect in strict mode.
console.log(person); // Output: { name: 'John', age: 30 }
Object.seal(obj):

Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.
javascript
Copy code
let car = { brand: 'Toyota', model: 'Camry' };
Object.seal(car);
car.year = 2022; // This assignment will have no effect.
delete car.model; // This deletion will have no effect.
console.log(car); // Output: { brand: 'Toyota', model: 'Camry' }
Object.create(proto, [propertiesObject]):

Creates a new object with the specified prototype object and optional properties.
javascript
Copy code
let animal = { makeSound: function() { console.log('Some sound'); } };
let dog = Object.create(animal);
dog.breed = 'Labrador';
console.log(dog.breed); // Output: Labrador
dog.makeSound(); // Output: Some sound
Object.hasOwnProperty(prop):

Returns a boolean indicating whether the object has the specified property.
javascript
Copy code
let person = { name: 'John', age: 30 };
console.log(person.hasOwnProperty('name')); // Output: true
console.log(person.hasOwnProperty('gender')); // Output: false
Object.is(obj1, obj2):

Compares if two values are the same. Similar to the === operator, but treats NaN and -0 as equal.
javascript
Copy code
console.log(Object.is(5, '5')); // Output: false
console.log(Object.is(NaN, NaN)); // Output: true
Object.keys(obj):

Returns an array of a given object's own enumerable property names.
javascript
Copy code
let person = { name: 'John', age: 30, job: 'Developer' };
let keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'job']
Object.values(obj):

Returns an array of a given object's own enumerable property values.
javascript
Copy code
let person = { name: 'John', age: 30, job: 'Developer' };
let values = Object.values(person);
console.log(values); // Output: ['John', 30, 'Developer']
Object.entries(obj):

Returns an array of a given object's own enumerable property [key, value] pairs.
javascript
Copy code
let person = { name: 'John', age: 30, job: 'Developer' };
let entries = Object.entries(person);
console.log(entries);
// Output: [['name', 'John'], ['age', 30], ['job', 'Developer']]
Object.assign(target, source1, source2, ...):

Copies the values of all enumerable own properties from one or more source objects to a target object.
javascript
Copy code
let target = { a: 1, b: 2 };
let source = { b: 3, c: 4 };
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 3, c: 4 }
Object.freeze(obj):

Freezes an object, preventing new properties from being added, and existing properties from being removed or modified.
javascript
Copy code
let person = { name: 'John', age: 30 };
Object.freeze(person);
person.age = 31; // This assignment will have no effect in strict mode.
console.log(person); // Output: { name: 'John', age: 30 }
Object.seal(obj):

Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.
javascript
Copy code
let car = { brand: 'Toyota', model: 'Camry' };
Object.seal(car);
car.year = 2022; // This assignment will have no effect.
delete car.model; // This deletion will have no effect.
console.log(car); // Output: { brand: 'Toyota', model: 'Camry' }
These examples cover a range of common object manipulation and property management methods in JavaScript.

// Array ---------------------------


Certainly! Here are 15 commonly used JavaScript array methods along with examples:

push(element1, element2, ...):

Adds one or more elements to the end of an array and returns the new length.
javascript
Copy code
let fruits = ['apple', 'banana'];
let newLength = fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'orange']
console.log(newLength); // Output: 3
pop():

Removes the last element from an array and returns that element.
javascript
Copy code
let fruits = ['apple', 'banana', 'orange'];
let removedElement = fruits.pop();
console.log(fruits); // Output: ['apple', 'banana']
console.log(removedElement); // Output: orange
shift():

Removes the first element from an array and returns that element.
javascript
Copy code
let fruits = ['apple', 'banana', 'orange'];
let removedElement = fruits.shift();
console.log(fruits); // Output: ['banana', 'orange']
console.log(removedElement); // Output: apple
unshift(element1, element2, ...):

Adds one or more elements to the beginning of an array and returns the new length.
javascript
Copy code
let fruits = ['banana', 'orange'];
let newLength = fruits.unshift('apple');
console.log(fruits); // Output: ['apple', 'banana', 'orange']
console.log(newLength); // Output: 3
splice(start, deleteCount, item1, item2, ...):

Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
javascript
Copy code
let fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'grape', 'kiwi');
console.log(fruits); // Output: ['apple', 'grape', 'kiwi', 'orange']
concat(array1, array2, ...):

Combines two or more arrays.
javascript
Copy code
let fruits = ['apple', 'banana'];
let vegetables = ['carrot', 'broccoli'];
let combined = fruits.concat(vegetables);
console.log(combined); // Output: ['apple', 'banana', 'carrot', 'broccoli']
slice(start, end):

Extracts a section of an array and returns a new array.
javascript
Copy code
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // Output: ['banana', 'orange', 'grape']
indexOf(element, fromIndex):

Returns the index of the first occurrence of an element in an array, or -1 if not found.
javascript
Copy code
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let index = fruits.indexOf('orange');
console.log(index); // Output: 2
lastIndexOf(element, fromIndex):

Returns the index of the last occurrence of an element in an array, or -1 if not found.
javascript
Copy code
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'orange'];
let lastIndex = fruits.lastIndexOf('orange');
console.log(lastIndex); // Output: 5
forEach(callbackFn(element, index, array)):

Calls a function for each element in an array.
javascript
Copy code
let numbers = [1, 2, 3];
numbers.forEach((num, index) => {
  console.log(`Element at index ${index}: ${num}`);
});
// Output:
// Element at index 0: 1
// Element at index 1: 2
// Element at index 2: 3
map(callbackFn(element, index, array)):

Creates a new array by applying a function to each element in an existing array.
javascript
Copy code
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]
filter(callbackFn(element, index, array)):

Creates a new array with all elements that pass the test implemented by the provided function.
javascript
Copy code
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]
reduce(callbackFn(accumulator, currentValue, index, array), initialValue):

Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
javascript
Copy code
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
every(callbackFn(element, index, array)):

Tests whether all elements in an array pass the test implemented by the provided function.
javascript
Copy code
let numbers = [2, 4, 6, 8];
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: true
some(callbackFn(element, index, array)):

Tests whether at least one element in the array passes the test implemented by the provided function.
javascript
Copy code
let numbers = [1, 3, 5, 7];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: false
These examples cover a variety of array manipulation and iteration methods in JavaScript.









