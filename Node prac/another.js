// Set an interval that logs "Hello" to the console every 500 milliseconds
var myInt = setInterval(function () {
    console.log("Hello");
}, 300);

// Set a timeout that clears the interval after 5000 milliseconds (5 seconds)
setTimeout(function () {
    clearInterval(myInt);
}, 5000);