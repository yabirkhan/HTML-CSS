// let age = 21;

// if (age >= 18) {
//   console.log("Elligible ");
// } else {
//   console.log("Not Elligible");
// }

// let age = prompt("Enter Your Age");

// if (age >= 18) {
//   alert("Elligible 😎");
// } else {
//   alert("Not Elligible 😪");
// }

// parseInt
// let a = "12.75";
// console.log(parseInt(a));
// console.log(typeof parseInt(a));

// parseFloat
// let b = "10.15";
// console.log(parseFloat(b));
// console.log(typeof parseFloat(b));

// Number
// let c = "abcd";
// console.log(typeof c);
// console.log(typeof Number(c));

// let d = "abcd";

// console.log(parseInt(d));
// console.log(parseFloat(d));
// console.log(Number(d));

// trim method

// let str1 = "     Chirag      Sharma     ";
// console.log(str1);
// console.log(str1.trim());

// let age = parseFloat(prompt("Enter Your Age").trim());
// console.log(typeof age);

// if (isNaN(age)) {
//   alert("Enter a Valid Age");
// } else {
//   if (age >= 18) {
//     alert("Elligible 😎");
//   } else {
//     alert("Not Elligible 😪");
//   }
// }

// Problem 2: Write a JavaScript program that prompts the user to enter two numbers and then determines and displays the larger of the two numbers.

let num1 = parseFloat(prompt("Enter Number1").trim());
let num2 = parseFloat(prompt("Enter Number2").trim());

if (isNaN(num1) && isNaN(num2)) {
  alert("Enter a valid Number");
} else {
  if (num1 > num2) {
    alert(`${num1} is greater than ${num2}`);
  } else if (num2 > num1) {
    alert(`${num2} is greater than ${num1}`);
  } else {
    alert("Both Numbers are Equal");
  }
}

// Problem 1: Write a JavaScript program that prompts the user to enter a character and then determines and displays whether the entered character is a vowel or a consonant.

// Problem 2: Write a JavaScript program that calculates the area of a rectangle. Prompt the user to enter the length and width of the rectangle, then calculate and display the area.

// Problem 3: Write a JavaScript program that converts temperatures from Celsius to Fahrenheit. Prompt the user to enter the temperature in Celsius, then calculate and display the equivalent temperature in Fahrenheit.

// Problem 4: Write a JavaScript program that calculates the simple interest. Prompt the user to enter the principal amount, the rate of interest, and the time period (in years). Calculate and display the simple interest.

// Problem 5: Write a JavaScript program that prompts the user to enter three numbers and then calculates and displays the average of those numbers.

// Problem 6: Write a JavaScript program that calculates the area of a triangle. Prompt the user to enter the base and height of the triangle, then calculate and display the area.

// Problem 7: Write a program to find the remainder of two numbers when divided.

// Problem 8: Write a Program to calculate the perimeter of a rectangle using its length and width
