console.log('Lets start')
// object create 


// let rectangle = {
//     length:1,
//     breadth:2,

//     draw: function(){
//         console.log('draw')
//     }
// };
// function createRectangle(len, bre){
//     let rectangle ={
//         length:len,
//         breath:bre,
//         draw() {
//             console.log('drawing rectangle')
//         }
//     };
//     return rectangle
// }
// let rectangleObj1 = createRectangle( 5, 5);
// let rectangleObj2 = createRectangle( 3, 2);
// let rectangleObj3 = createRectangle( 6, 7);

// constructor function parcal notation first letter of every word is capital number

//  constructor function  is props/methods intialise /define 
function Rectangle(){
    this.length = 1;
    this.breadth = 2;
    this.draw = function(){
        console.log('drawing');

    }

}
// objection creation 


let rectangleObject = new Rectangle();
rectangleObject.color ='yellow'
console.log(rectangleObject);


delete rectangleObject.color;
console.log(rectangleObject);

// let src ={
//     a:2,
//     b:3,
//     c:4,
// };

// let dest ={};
// for(let key in src) {
//     dest[key] = src[key];
//  }
//  console.log(dest);
//  console.log('naresh')
// let src ={
//     a:10,
//     b:20,
//     c:30,

// }
// let dest = Object.assign({}, src);

// console.log(dest)
// src.a++;


let src ={
    a:10,
        b:20,
        c:30,
};
let dest =  {...src}
console.log(dest)
src.a++;
console.log(dest)
 