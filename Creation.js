const fruits = ['apple', 'banana', 'cherry',];
const second = fruits[1];

console.log("second fruits", second);
fruits[2] ='grape';
console.log(fruits[2]);
console.log('Array length', fruits.length);

fruits.push('kiwi');
fruits.pop();
 //let fruits =['apple', 'banana','orange',];
 for (let i = 0; i <fruits.length; i++)
    console.log(fruits[i]);

// let fruits = ['apple', 'banana', 'orange',];
 fruits.forEach(fruits =>
    console.log(fruits));
