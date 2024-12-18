let arr1 = [11,5,-5,6,10,9];

// // [15,9,-1,10,14,13]
// let result = (arr)=>{
//     let opt = [];
//     for(let i = 0; i < arr.length; i++){
//         opt[i] = arr[i] + 4;

//     }
//     return opt;
// };

// console.log(result(arr1));


// let newArr1 = arr1.map(function (i){
//     return i + 4;
// });

// console.log(newArr1);


// let newArr2 = arr1.filter((n) => n < 0);
// console.log(newArr2);


// function minNum(arr){
//     let min = arr[0]
//     for(let n = 0; n< arr.length; n++){
//         if (arr[n] < min){
//             min = arr[n];
//         }
//     }
//     return min;
// }

// console.log(log(minNum(arr1)));
 
let minvalue = arr1.reduce ((acc, curr) => ( curr < acc ? curr : acc ), arr1[0]);
console.log (minvalue );

let data = [

    {
        name: "Deepak",
        address: "Dabra",
        age: 20,
    },
    {
        name: "Kaushalk",
        address: "Bangaldesh",
        age: 25,
    },
    {
        name: "Anshul",
        address: "Zimbabwe",
        age: 35,
    },
    {
        name: "Yabir",
        address: "Morena",
        age: 21,
    },
];

let opt1 = data.map((profile))
