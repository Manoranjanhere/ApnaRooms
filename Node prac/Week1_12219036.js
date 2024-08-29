
const person = {
  firstName: 'Manoranjan',
  lastName: 'Sahoo',
  age: 20,
  greet: function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`);
  }
};

// Call the function within the object
person.greet();
