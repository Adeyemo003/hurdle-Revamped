// i just wanted to add a little bit of functionality to the page :)
let count = 0;
let countEl = document.getElementById("count-el")


function addFree(){
    count = count + 1;
    countEl.textContent = count
    console.log(count)
}