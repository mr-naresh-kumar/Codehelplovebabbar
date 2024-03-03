// // adding 100 para 
// const t1 = performance.now();
// for(let i=1; i<=100; i++){
//    let newElement = document.createElement('p');
//    newElement.textContent = 'This is Para ' + i;
//    document.body.appendChild(newElement); 
// }
// const t2 = performance.now();
// console.log("This took " + (t2-t1) + "ms");

// // optimising  a bit 

// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let  i=1; i<=100; i++){
//     let element =document.createElement('div');
//     element.textContent = 'This is Para' + i;
//     myDiv.appendChild(element);

// }
// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log("This took  be " + (t4-t3) + "ms");



// fragment 

let fragment = document.createDocumentFragment();
for(let i=1; i<=100; i++){
       let newElement = document.createElement('p');
       newElement.textContent = 'This is Para ' + i;
       fragment.body.appendChild(newElement); 
    }
document.body.appendChild(fragment);//one repand and one Reflow
    

function addPara(){
    letPara = document.createElement('p');
    parseFloat.textContent = 'JS is Single';
    document.body.appendChild(para);
}
function appenNewMessage(){
    let para = document.createElement('p')
    para.textContent = 'kya hall chaal';
    document.body.appendChild(para);
}
addPara();
appendNewMessage();