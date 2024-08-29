// Create an array
let fruits = ['apple', 'banana', 'orange', 'mango'];

// Access elements in an array
console.log('Fruit at index 0:', fruits[0]); // Output: apple

// Modify elements in an array
fruits[1] = 'grape';
console.log('Updated fruits array:', fruits); // Output: ['apple', 'grape', 'orange', 'mango']

// Add elements to the end of an array
fruits.push('kiwi');
console.log('Fruits array after pushing kiwi:', fruits); // Output: ['apple', 'grape', 'orange', 'mango', 'kiwi']

// Remove the last element from an array
let removedFruit = fruits.pop();
console.log('Removed fruit:', removedFruit); // Output: kiwi
console.log('Fruits array after popping:', fruits); // Output: ['apple', 'grape', 'orange', 'mango']

// Add elements to the beginning of an array
fruits.unshift('watermelon');
console.log('Fruits array after unshifting watermelon:', fruits); // Output: ['watermelon', 'apple', 'grape', 'orange', 'mango']

// Remove the first element from an array
let shiftedFruit = fruits.shift();
console.log('Shifted fruit:', shiftedFruit); // Output: watermelon
console.log('Fruits array after shifting:', fruits); // Output: ['apple', 'grape', 'orange', 'mango']

// Find the index of an element in an array
let indexOfOrange = fruits.indexOf('orange');
console.log('Index of orange:', indexOfOrange); // Output: 2

// Remove a specific element from an array by index
let removedElement = fruits.splice(1, 1); // Remove 1 element starting from index 1
console.log('Removed element at index 1:', removedElement); // Output: ['grape']
console.log('Fruits array after splicing:', fruits); // Output: ['apple', 'orange', 'mango']

// Copy an array
let copyOfFruits = fruits.slice();
console.log('Copy of fruits array:', copyOfFruits); // Output: ['apple', 'orange', 'mango']
