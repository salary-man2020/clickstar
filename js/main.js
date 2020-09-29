"use strict"

const btn = document.getElementById("btn");
const list = document.getElementById("list");
let total = 0;
let currentNumber = 0;

function createSeat(){
  if(btn.classList.contains("isactive")){
    return;
  }
  for(let i = 0 ; i < 10;i++){
    let ul = document.createElement("ul");
    list.appendChild(ul);
    for(let i = 0; i < 10;i++){
     let n = Math.random();
     let li = document.createElement("li");
     if(n < 0.05){
       li.textContent = "★";
       li.classList.add("black");
       total ++;
     }else{
       li.textContent = "☆";
       li.classList.add("white");
     };
    ul.appendChild(li);
    }
  }
  btn.classList.add("isactive");
}

btn.addEventListener("click",createSeat);


let black = document.querySelector("li.black");

function clickBlack(){
  black.classList.add("pushed");
  currentNumber ++;
  if(currentNumber === total){
    let li = document.querySelectorAll("li");
    li.textContent = "-";
  };
};

black.addEventListener("click", clickBlack);
