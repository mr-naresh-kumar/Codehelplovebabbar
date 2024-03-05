


// document.addEventListener('click', function(){
//     console.log("I have click on this document")
// });

// document.removeEventListener('click', function(){
//     console.log("I have click on this document")
// });


// const content = document.querySelector('#wrapper')

// content.addEventListener('click', function(event){
// console.log(event);
// })


// let  links =document.querySelectorAll('a');

// let thirdLink = links[2];

// thirdLink.addEventListener('click' , function(event){
//     event.preventDefault();
//     console.log("Mazza ayaya, axxha laga")
// });


// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log('Para' + event.target.textContent);
// }

// myDiv.addEventListener('click', paraStatus );


// for(let i = 1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent =  'this is para ' +i;

   
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


let element = document.querySelector('#wrapper')
element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('span pr click kai hai' + event.target.textContent)

    }
})