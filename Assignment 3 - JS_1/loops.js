// a. Write a JavaScript program that accepts two integers and displays the larger of the two.
let num1 = 0;
let num2 = 0;
do
{
    num1 = prompt("Enter number 1: ");
    num2 = prompt("Enter number 2: ");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(num1);
    console.log(num2);
}
while(!Number.isInteger(num1) || !Number.isInteger(num2));
if(num1 > num2)
    alert("Larger number is: " + num1);
else
    alert("Larger number is: " + num2);
        
// b. Write a JavaScript program that checks whether an integer is an even or an odd number.
let number = 0;
do
{
    number = prompt("Enter integer to check if even or odd");
    number = parseInt(number);
}
while(!Number.isInteger(number));

if(number % 2 == 0)
    alert(number + " is even");
else
    alert(number + " is odd");
