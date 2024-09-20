let colors =['red', 'green', 'blue',];
let [color1, color2] = colors;

console.log(color1);
console.log(color2);

let numbers =[20, 40, 60,];
let[,, thirdnumber] = numbers;
console.log(thirdnumber);

let fruits =['apple', 'banana', 'orange',];

let [firstFruits, ...otherFruits] = fruits;

console.log(firstFruits);

console.log(otherFruits);
 let shapes = [];
 let [firstShape = 'circle'] =shapes;
 console.log(firstShape);

 let a = 5;
 let b = 10;
 [a,b] = [b,a];
 console.log(a);
 console.log(b);