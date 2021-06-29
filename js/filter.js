const lowCategority = document.getElementsByClassName("task-low-priority");
const mediumCategority = document.getElementsByClassName("task-medium-priority");
const highCateority = document.getElementsByClassName("task-high-priority");
const taskList = document.getElementsByClassName("task-list");

const opSelect = document.getElementById("op-selector");

const filter = document.getElementsByClassName("op-filter");


opSelect.addEventListener("click", function(){
    if(opSelect.value===filter[2].value)
    {
        showHighCategory();
        hiddenMediumCategory(); 
        hiddenLowCategory();   
    }
    if(opSelect.value===filter[3].value)
    {
        showMediumCategory();
        hiddenHighCategory();
        hiddenLowCategory();
    }
    if(opSelect.value===filter[4].value)
    {
        showLowCategory();
        hiddenHighCategory();
        hiddenMediumCategory();
    }
});
/*MOSTRAR */
function showHighCategory(){
    for (let i = 0; i < highCateority.length; i++) {
        highCateority[i].classList.remove("hidden");
    }
}
function showMediumCategory(){
    for (let i = 0; i < mediumCategority.length; i++) {
        mediumCategority[i].classList.remove("hidden");
    }
}

function showLowCategory(){
    for (let i = 0; i < lowCategority.length; i++) {
        lowCategority[i].classList.remove("hidden");
    }
}
/*OCULTAR */
function hiddenHighCategory(){
    for (let i = 0; i < highCateority.length; i++) {
        highCateority[i].classList.add("hidden");
    }
}
function hiddenMediumCategory(){
    for (let i = 0; i < mediumCategority.length; i++) {
        mediumCategority[i].classList.add("hidden");
    }
}
function hiddenLowCategory(){
    for (let i = 0; i < lowCategority.length; i++) {
        lowCategority[i].classList.add("hidden");
    }
}
