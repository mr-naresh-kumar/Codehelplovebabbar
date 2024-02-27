// console.log('Naresh Here')

// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');


// setTimeout(function(){
//     console.log('third');

// },3000);
// // console.log('Naresh Here')

// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');


// let meraPromise = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         console.log('I am a inside promise');

//     },5000)
//     // return 2;

//     // resolve(13253564);
//     reject( ' you are a wrong person ' ,232);
// });
// meraPromise.then((value)=> {console.log(value)}, (error)=>{console.log("recived an erron")});
// console.log('pehla');



// let vaadaa1 = new Promise(function(resolve, reject){
// setTimeout(()=>{
//          console.log('Set timeout 1 started');
//        },2000);
//        resolve (true);
// });

//  let output = vaadaa1.then(()=>{
//     let vaadaa2 = new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             console.log('set time 2 off')

//         },3000)
//         resolve("vadda 2 resolved")
//     } );
//     return vaadaa2;
// })
// output.then((value)=>console.log(value));

let obj= {
    heading:"head",
}
async function utlility(){
let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
let output = await content.json();
console.log(output);
}
utlility();