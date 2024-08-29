const property1 = Symbol("Name");
const property2 = Symbol("Salary");
myobj = 1;
myobj[property1] = "Rajesh";
myobj[property2] = 50000;
console.log(myobj.property1);
console.log(myobj[property1]);