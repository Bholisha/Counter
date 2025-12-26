let counter= document.getElementById("counter-display");
let increase= document.getElementById("increase");
let decrease = document.getElementById("decrease");


let count= 0;

increase.addEventListener("click",function(){
    count++;
    counter.innerText=count;
})

decrease.addEventListener("click",function(){
    count--;
    counter.innerText = count;
})