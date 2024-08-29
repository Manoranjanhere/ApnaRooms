var a=Number(prompt("Enter 1st order"));
var b=Number(prompt("Enter 2nd order"));
var c=Number(prompt("Enter 3rd order"));
let ans =a+b+c*2;
alert("your total price is = "+ans)
alert("your avg is = "+ans/4)
alert("get discount of $5 on promo code (I got 5 on it) Final price = "+(ans-5))
document.write("Your pay: "+(ans-5));