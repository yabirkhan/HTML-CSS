// "use strict";


/*let age =1;
do{
    console.log(age);
    age++;
    
}while(age<=20);
*/
/*
let hasDrivingsLicence = false;
let passTest =true;
 if(passTest) hasDrivingsLicence=== true;
 if(hasDrivingsLicence) 
    console.log("I can Drive");*/
//   num= 5;
  ///console.log(num);
   //let interface ="hello"
   //console.log(interface);

  // let private =124345
  // console.log(private);

  // Functions
  /* functionf1() {
    console.log("Hello Everyone");
    
   }
   f1();
   function f2(num1,num2){
    return num1*num2;
   }

   let opt = f2(9,7);
   console.log(opt);


   //
   const f3 = function() {
    console.log("Good Morning");
   };

   f3();

   const f4 = function(n1,n2,n3){
    return (n1 + n2+ n3)/ 3;

   };
   */
   /* let opt2 =f4(6,7,8);
    console.log(opt2);


     Arrow function
     const f5 =(n1,n2,n3)=> {
        return n1* n2* n3;
};

 /*


const f5 = (n1, n2, n3)=> n1*n2*n3;
 

let opt3 = f5(5,6,7);
console.log(opt3);

*/
// Array

//let arr1 =["Chirag",100,false];
//console.log(arr1);
// let cars = new Arrays("Suzuki","lamborigini" "bmw","Bolero","Buggati")
//let cars =["Suzuki","lamborigini","Bmw","Bolero","Buggati","jaguar"];
/*console.log(cars);
console.log(typeof cars);
console.log(cars.length);
console.log(cars[3]);
cars[0]="Farrari";
console.log(cars);
cars[5]="Nano";
console.log(cars);
console.log(cars.toString());
*/
/*
for(let i=0;i< cars.length;i++)
{
    console.log(cars[i]);
    
}
for(let i= cars.length-1; i>=0;i--){
    console.log(cars[i]);
}
console.log(cars[5]);

*/
// Array Method
/*let fruits =["Apple","Mango","papaya"];
console.log(fruits);


// Push Metod
 //fruits.push("banana");
 console.log(fruits);

 // unshift method
// fruits.unshift("mango");
 console.log(fruits);

 // pop Method
 //fruits.pop();
 //console.log(fruits);

  //Shift method
  //fruits.shift();
 // console.log(fruits);
  
  // joint Method 
  // let v1 = fruits.join(" ")
   //console.log(v1);
   // concat Method
   /*
let arr1=[1,2,3];
let arr2 =[4,5,6];
let arr3= [7,8,9];



let newArr = arr1.concat(arr2);
console.log(newArr)

let newArr2 = newArr.concat(arr3);
console.log(newArr2)

let newArr3 = arr1.concat(arr2,arr3);
console.log(newArr3)
*/
// Array Method/
//  let arr1 = ["Chirag","Prashant","Piyush","Yabir"];
// console.log(arr1);

// arr1.splice(0,0, "Girraj","Sourabh");
// console.log(arr1);


 // splice(Starting index, delete-count, elements to be added)

//  let arr2 =[5,6,,11,9,15,7];
//  let slicedArray = arr2.slice(2,4);
//  console.log(slicedArray);

 //  flat method

 /*let arr3 = [1,2,[3,4,[5,6,[7,8]]]];
 console.log(arr3);

 let newArr3 = arr3.flat(Infinity);
 console.log(newArr3);
 //IndexOff 
 let arr4 = [1,2,3,4,5,6];
 console.log(arr4.indexOf(2));
 console.log(arr4.lastIndexOf(6));
 */
 

 //   Find method
 let arr1 = [4,7,10, 15, 14,8]

 //let opt1  = arr1.find(function(num) {
   // return num> 10;
 //});


 //let opt1 = arr1.find((num) => num%3===0);

 //console.log(opt1);
 

 // find Index
// let opt2 = arr1.findIndex((num)=> num > 10);
 //console.log(opt2);

 // Every method
 //let opt3 = arr1.every((num)=> num>5);
 //console.log(opt3);

 // some method

 //let opt4 = arr1.some((num)=> num>5);
// console.log(opt4);

 // Reverse Method

 //arr1.reverse();
 //console.log(arr1);

 // To Reversed Method
 //let opt5 =arr1.toReversed();
 //console.log(opt5);
 
 // Sort Method

 let profile = ["Prashant","Yabir","Anshul","Satyen","Amir"];
  console.log(profile);

  profile.sort();
  console.log(profile);

  let arr2 =[5,7,2,,9,3,6];

  arr2.sort();
  console.log(arr2);

  let arr3 =[11,50,,9,7,15,4,2];
  arr3.sort();
  console.log(arr3);

  arr3.sort(function(n1,n2){
    return n2-n1;
  });

  arr3.sort((a,b)=> b-a);
  console.log(arr3);

  // copyWithin

  let arr4 = [1,2,3,4,5];
  arr4.copyWithin(2);
  
  console.log(arr4);

 
 
 
 


 