// let courses = [
//     {no:1, naam:'love'},
//     {no:2, naam:'naresh'}

// ];
// console.log(courses);
// console.log(course.indexOf({no:1,naam:'Love'}));
//   let course
//   = courses.find(function(courses){
//     return courses.naam ==='love';
// })
//  let course = courses.find(course=>
//     course.naam === 'naresh'
// )
// console.log(course)


// let numbers =[1 , 2, 3, 4, 5, 6, 7]
// numbers.pop();
// numbers.shift();
// numbers.splice(2,1)
// console.log(numbers);

console.log("naresh")



// let numbers1 = [1, 2, 3, 4, 5]
// let numbers2 =numbers1;
// // numbers1 = [];
// numbers1.length = 0;
// console.log(numbers1)
// console.log(numbers2)

// let first = [1, 2, 3];
// let second = [4, 5, 6];
// let combined= first.concat(second);
// console.log(combined)
// console.log("hello world");
// let sliced = combined.slice(2, 4  );
// console.log(sliced)
// let first = [1, 2, 3];
// let second = [4, 5, 6];
// let combined =[...first,'a', ...second, 'b'];
// console.log(combined)
//  let another = [...combined]
//  console.log(another)


// let arr = [10, 20, 30, 40 ,50, 60,  80 ];
// for(let value of arr){
//     console.log(value)
// }


// arr.forEach(function(number){
//  console.log(number)
// })
// arr.forEach( number=> console.log(number))



// let numbers =[10, 20, 30, 40 ,50]
// const joined = numbers.join(',');
//  console.log(joined);



//  let message ='this is my first message'
//  let parts = message.split(' ');
//  console.log(parts);



//  let numbers =[40 , 30, 2, 10 ,4];
//  numbers.sort();
//  console.log(numbers);



//  let num = [1, 2, 3, -1, -3];
//   let filtered = num.filter(value => value<= 0);
//   console.log(filtered);

let numbers = [7, 8, 9, 10];
 let items =numbers.map(value => 'student_no' + value);
console.log(items);



// mapping with object
let number = [1, 2, -3,-4]
// let 
//  filtered=number.filter(value=>value>=0);
let items1 = number
.filter(value=>value>=0)
.map(num=>{value: num});
console.log(items1);