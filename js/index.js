'use strict'

//mettere i prompt agli imput

// let element = document.getElementById("nome");

// let element2 = document.getElementById("kilometri");

// let element3 = document.getElementById("eta");


// element = prompt("nome");
// console.log("nome")


function userInput(){
    var nome = document.getElementById("nome");
    var kilometri = document.getElementById("kilometri");
    var eta = document.getElementById("eta");
    document.getElementById("input1").innerHTML = nome + "" + kilometri + "" + eta;
}