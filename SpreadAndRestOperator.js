let fruits1 = ['apple','orange',];
let fruits2 = ['grape','banana',]
 let allFruits = [...fruits1, ...fruits2];
 console.log(allFruits); 
 function addNumbers(a, b, c,) {
    return a + b + c;
 }
 let numbers = [1, 2, 3,];
 let sum = addNumbers(...numbers);
 console.log(sum);

 function mul(firstNumber, ...otherNumbers) {
    return otherNumbers.reduce((acc, num) => acc * num, firstNumber);
 }
 console.log(mul(2, 3, 4,));
 console.log(mul(5, 1, 2, 3,));
  let colors = ['red, green, blue'];
  let copiedColors = [...colors];
  console.log(copiedColors);

