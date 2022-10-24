//Write a JavaScript program to find the diagonal of a square where the length of eachside is 9.
let sideLength = 9;
let diagonal = (Math.sqrt(2) * sideLength).toFixed(2);
alert("a. Diagonal of a square with side length of " + sideLength + " = " + diagonal)


//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.
let side1 = 5;
let side2 = 6;
let side3 = 7;
let semiPerimeter = (side1 + side2 + side3) / 2;
let area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
area = area.toFixed(2);
alert("b. Area of traingle with sides of length " + side1 + ", " + side2 + ", " + side3 + ", = " + area);

//Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4.
let radius = 4;
const PI = 3.14;
let circumference = 2 * PI * radius;
let areaOfCircle = PI * (radius * radius);
alert("Circle with radius of " + radius + " has circumference of " + circumference + " and area of " + areaOfCircle);
