// var d = function second (){
//     console.log("This is just another best function in thw world!!!");
   
// }

// var dell= function(){
//     console.log("This is a fucntion which does not have any name givrn to it.");
// }

// function first(){
    
//     console.log("This is the best function available in the worlddddddd!!!!!");
// }


// first();
// // second();
// dell();
// d();

// const dinesh1 =["dinesh", "suthar", "Shailesh"];
// const dinesh2 =  Array(1,2,34,5,5,6,6);
// const dineshArray = [];
// dineshArray.push('dinesh', 'shailesh', 'suthar');
// console.log(dinMatrix);

// const dinMatrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]    
// ]

// const bio =[
//     {Name: 'Dinesh', Age: 23}, 
//     {Height: 5.7, Weight: 55}
// ]

// console.log(bio[0])
// const number = [1,2,4,3,6,7,7,7,777,4,5,3,3,34,5,56]

// const after = number.map(numb => numb *10)
// const TodayDate = new Date();


// function naam (name){
//     console.log(`Hello everyone, my name is ${name}`)
// }

// naam('dinesh');


// console.log(naam);
// console.log(window.innerWidth); // Accessing a property from the global object in a browser environment


// const person ={
//     "name": "John Doe",
//     "age": 30,
//     "height":'175cm '
//   }

// console.log(`${person.name}`);
// console.log(`${person.age}`);
// console.log(`${person.height}`);

// const personName = prompt("Enter your name");


// alert("Hello Everyone I am "+ personName);

let submit = document.getElementById("marksubmit");

submit.addEventListener("submit", (e)=>{
    e.preventDefault();

    let mathMark = document.getElementById("mathMark");
    let engMark = document.getElementById("engMark");
    let hinMark = document.getElementById("hinMark");
    let sciMark = document.getElementById("sciMark");

    if(mathMark.value == "" || engMark.value == "" || hinMark.value == "" || sciMark.value == ""){
        alert("Please Enter Marks");
        // console.log(`${mathMark}`);
    }
    // else{
    //     alert("This you have successfully login!!!!");
    //     mathMark.value=""; 
    //     engMark.value=""; 
    //     hinMark.value=""; 
    //     sciMark.value=""; 
    // }
}
)