// console.log('kya haal chal')
   

// // function  deleraction

// function run(){
//     console.log('running out');

// }
// run();
// //  named function assignement 

// let stand = function walk(){
//     console.log('working')
// };
// stand();


// let jump = stand;
// jump();

// //    argumrnts  fof function adding 
// function sum  (a, b){
//     let total = 0;
//     for(let value of arguments)
//     total = total+value;
//     return total;
// }
// let ans = sum(1, 2, 3, 4, 4, 5, 6, 7);
// console.log(ans);




// // rest parameters 
// function sum1 ( num, ...args){
//     console.log(args);
// }
// sum1(1, 2, 3, 4, 5, 5,6 );


// // defaults parameters

// function interest(p, r=5,s=12){
//     return p*r*s/100;
// }
// console.log(interest(1000, 9));


// let person ={
//     fname:'naresh',
//     lname:'babbar',
//     get fullName(){
// return `${person.fname} ${person.lname}`;
// },
// set fullName(value){
//     if(typeof value !== String){
//         throw new Error("you have not sent a string")
//     }
//     let parts = value.split(' ');
//     this.fname =parts[0];
//     this.lname =parts[1];
// }
// };
// // try and catch 
// try{
// person.fullName= true;
// }
// catch(e){
//     alert(e);

// }




// class2 for js dom 



// console.log(person.fullName);
// function eventfunction(){
//     console.log('I have a clicked on this document');

// }
// document.addEventListener('click', eventfunction);

// document.removeEventListener('click',eventfunction);
// const content = document.querySelector('#wrapper');
// content.addEventListener('click', function(event){
//     console.log(event);
// });


// const links = document.querySelectorAll('a');
// let thirdlink = links[2];
// thirdlink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('maza aaya, axcha lga');
// })


// let myDiv = document.createElement('div');


// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is a para'+ i;


//     newElement.addEventListener('click', function(event){
//         console.log('I have clicked on para');
//     });

// myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);



// let myDiv = document.createElement('div');
// function parastatus(event){
//     console.log('I have clicked on para');
// };
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is a para'+ i;

//     newElement.addEventListener('click',parastatus)
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);



let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
    console.log('span par click kia h ' + event.target.textContent)
}
});