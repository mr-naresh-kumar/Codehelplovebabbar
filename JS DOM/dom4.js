// console.log("naresh is now gone to mumbai"
// function sync(){
//     console.log("first")
// }
// sync();
// console.log("second");

// setTimeout(function(){
//     console.log("third");
// }, 2000);

// function sync(){
//     console.log("first")
// }
// sync();
// console.log("second");

// let meraPromise = new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log(" I am inside promise");
//     },5000)
//     // resolve(1998);
//     reject(new Error("bhai sahab error aayeh "))
//     // return 2;

// })
// meraPromise.then((value)=>{console.log(value)}, (error) =>{console.log("Recieved an error")});

// console.log("Phlla")

// let wada1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("setime out1 started");
//   }, 2000);
//   resolve(true);
// });

// let output = wada1.then(() => {
//   let wada2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("setime out2 started");
//     }, 2000);
//     resolve("wada 2 resolved");
//   });
//   return wada2;
// });
// output.then((value) => console.log(value));

// async function abcd() {
//   return 7;
// }



// async function utility() {

//        let maharashtraMosume = new 
//          Promise((resolve, reject) => {
//          setTimeout(() => {
//            resolve("delhi me bhot garmi hai");
//          },2000);
//        });
     
//        let hedrabadMosome = new Promise((resolve, 
//            reject) => {
//          setTimeout(() => {
//            resolve("hedrabab is cool");
//          }, 1000);
//        });

//        let Dm = await maharashtraMosume;
//        let hm = await hedrabadMosome;

//        return [Dm, hm]
// }  


// let obj ={
//   heading  : "head"
// };
// async function utility(){
//   let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   let output =await content.json();
//   console.log(output);

// }
// utility();
// async function helper(){

//   let options= {
  
    
//       method: 'POST',
//       body: JSON.stringify({
//         title: 'Naresh',
//         body: 'unick',
//         userId: 123,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
    
//   }
//   let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//   let response = content.json();
//   return response;
// }

// async  function utility(){

//   let ans =  await helper();
//   console.log(ans);
// }

// utility();



function init(){
  var name = "Mozilla";
  function displayName(){
    console.log(name)
  }
 return  displayName;
}
 let func1 =init();
 func1();