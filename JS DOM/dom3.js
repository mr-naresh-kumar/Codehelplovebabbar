// // adding 100para 
// const t1 = performance.now();

// for(let i =1; i<=100; i++){
//      let newElement = document.createElement('p');
//      newElement.textContent = "this is my para"  +i;
//      document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took t1 :" + (t2-t1) + "ms") 

// // optimise a bit 


// const t3 = performance.now();
// let myDiv =document.createElement('div');


// for(let i =1; i<=100; i++){
//     let element =document.createElement('p');
//     element.textContent = "This is para" + i ;
//     myDiv.appendChild(element);
// }
// const t4 = performance.now();
// // console.log("this took is " + (t4-t3) + "ms") 
// // document.appendChild(myDiv);


// let fragment =document.createElementFragment();
// for(let i =1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = "this is my para"  +i;
//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took t1 :" + (t2-t1) + "ms") 


// document.body.appendChild(fragment); // 1 reprint 1 reflow 


// function addPara(){
//     let para = document.createElement('p')
//     para.textContent = "JS is Single ";
//     document.body.appendChild(para);

// }


// function appendNewMessage(){
//     let para = document.createElement('p');
//     para.textContent= "kya haal chal";
//     document.body.appendChild(para);
// }
// addPara();
// appendNewMessage();


