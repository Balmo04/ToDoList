/* Tipos de categoria */
const lowCategority = document.getElementsByClassName("task-low-priority");
const mediumCategority = document.getElementsByClassName("task-medium-priority");
const highCateority = document.getElementsByClassName("task-high-priority");
const taskList = document.getElementsByClassName("task-list");
/* Seleccionar la categoria */
const opSelect = document.getElementById("op-selector");
const filter = document.getElementsByClassName("op-filter");
/* Array para ordenar */
let indicatePriority;
let timeValue=[];

opSelect.addEventListener("click", function(){
    if(opSelect.value===filter[0].value){
        timeValue=getTime();
        showAllCategory();
        getTypeCategory();
        orderTopToLow();
    }
    if(opSelect.value===filter[1].value){
        showAllCategory();
        getTypeCategory()
    }
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

function showAllCategory(){
    for (let i = 0; i < taskList.length; i++) {
        taskList[i].classList.remove("hidden")
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


/*OTRAS FUNCIONES */

function getTypeCategory(){
    for (let i = 0; i < taskList.length; i++) {
        if(taskList[i].classList.contains("task-high-priority")){
            taskList[i].value=0;
        }  
        if(taskList[i].classList.contains("task-medium-priority")){
            taskList[i].value=1;
        }  
        if(taskList[i].classList.contains("task-low-priority")){
            taskList[i].value=2; 
        }  
    }
}

function orderTopToLow(){
   
}


function getTime(time){
    let hour, min, aux;
    for (let i = 0; i < time.length; i++) {
        aux = time[i];
        aux = aux.replace(":","");
        hour = Number(aux.substrig(0,2));
        min = Number(aux.substrig(2,5));
        timeValue[i]= hour*100+minutes
    }
    return timeValue;
}
