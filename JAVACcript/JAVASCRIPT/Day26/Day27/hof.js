//  higher oreder function ->
//   (function wich takes another function as a parameter or return a function is called higher order function).

// let radius = [4, 6, 7, 3];
// //  write the function which return area of circle , circumference of in arr 
//  and diameter of circle in arr.
// [] - area
// [] - circumference
// [] - diameter


// [] - area
// let areaOfCircle = (arr) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(Math.PI * arr[i] * arr[i])
//     }
//     return result
// }

// console.log(areaOfCircle(radius));


// [] - circumference

// let circumferenceOfCircle = (arr) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(2 * Math.PI * arr[i])
//     }
//     return result
// }

// console.log(circumferenceOfCircle(radius))


// [] - diameter

// let diameterOfCircle = (arr) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(2 * arr[i])
//     }
//     return result
// }

// console.log(diameterOfCircle(radius))


//  higher oreder function ->

// let area = (rad) => Math.PI * rad * rad;
// let circumference = (rad) => 2 * Math.PI * rad;
// let diameter = (rad) => 2 * rad;

// let calculate = (arr, formula) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(formula(arr[i]));
//     }
//     return result;
// }

// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));

// setIntervals

// let intervalId= setInterval (()=>{
// console.log("Today is Tuesday");
// console.log(new Date());
// clearInterval (intervalId)    
//}), 2000);

// let count =0;
// let endCount = 5;
//  let intervalId = setInterval(()=>{
//     if(count < endCount){
//         console.log("Today tuedsday");
//         console.log(new Date());
//         count++;

//     }else{
//         clearInterval(intervalId);

//     }
//  },2000);

// setTimeout

console.log("Yesterday was Monday",new Date());
setTimeout(() => {
    console.log("Today is Tuesday",new Date());

},3000);

let TimeoutId = setTimeout(()=> console.log("Third"),5000);

// clearTimeout(timeoutId)
// setTimeout(()=> console.log("Second"),5000);
//  console.log("first);

