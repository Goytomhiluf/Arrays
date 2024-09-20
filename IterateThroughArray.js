let numbers = [1, 2, 3, 4, 5,];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
let colors =['red', ' green', ' blue', 'yellow',];
colors. forEach(color =>
    console.log(color));

    let grades = [2, 4, 6, 8, 10,];
    let squaredGrades = grades.map(grade => grade * grade);
    console.log(squaredGrades);
     let ages = [15, 22, 17, 30, 16, 18]; 
      let adults = ages. filter (age => age >=18);
      console.log(adults);