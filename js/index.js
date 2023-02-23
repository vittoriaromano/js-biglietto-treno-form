'use strict'

//mettere i prompt agli imput

// let element = document.getElementById("nome");

// let element2 = document.getElementById("kilometri");

// let element3 = document.getElementById("eta");


// element = prompt("nome");
// console.log("nome")

let button = document.getElementById('genera')
const nomeUser = document.getElementById('nomeUser')  
const name = document.getElementById('name')


function showName(inputName){
    name.innerText = inputName;
}
button.addEventListener('click',() => {
    showName(nomeUser.value)
})