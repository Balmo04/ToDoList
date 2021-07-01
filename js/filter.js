/* Tipos de categoria */
const lowCategority = document.getElementsByClassName("task-low-priority");
const mediumCategority = document.getElementsByClassName("task-medium-priority");
const highCateority = document.getElementsByClassName("task-high-priority");

/* Seleccionar la categoria */
const opSelect = document.getElementById("op-selector");
const filter = document.getElementsByClassName("op-filter");
/* Array para ordenar */
let indicatePriority;
let timeValue = [];
let taskAux = [];

let taskList;

class taskObject {
    constructor(priority, time, position) {
        this.priority = priority;
        this.time = time;
        this.position = position;
    }
}
opSelect.addEventListener("click", function () {
    let value = opSelect.value;
    taskList = document.getElementsByClassName("task-list");
    createObjectTask();
    showAllCategory();
    let positions = orderTask(taskAux, "time");
    showByOrder(positions);
    taskList = document.getElementsByClassName("task-list");
    createObjectTask();
    if(value==="highToLow" || value==="lowToHigh"){
        if(value==="lowToHigh"){
           for (let i = 0; i < taskAux.length; i++) {
                switch (taskAux[i].priority){
                    case 0:
                        taskAux[i].priority = 2;
                        break;
                    case 1:
                        taskAux[i].priority = 1;
                        break;
                    case 2:
                        taskAux[i].priority = 0;
                        break;
                } 
           }
        }
        positions = orderTask(taskAux, "priority");
        showByOrder(positions);
        taskList = document.getElementsByClassName("task-list");
        createObjectTask();
    }
    else {
        let priorityFilter;
        switch(value){
            case "high":
                priorityFilter=0;
                break;
            case "medium":
                priorityFilter=1;
                break;
            case "low":
                priorityFilter=2;
                break;
        }
        showByPriority(priorityFilter);
    }
    console.log(value);
});

/*MOSTRAR */
function createObjectTask() {
    for (let i = 0; i < taskList.length; i++) {
        let priority = taskList[i].querySelector(".priority-text");
        let time = taskList[i].querySelector(".time-text");
        const position = i;
        priority = priority.innerText;
        time = time.innerText;
        time = getTime(time);
        priority = getPriorityNumber(priority);
        taskAux[i] = new taskObject(priority, time, position);
    }
}

function showAllCategory() {
    for (let i = 0; i < taskList.length; i++) {
        taskList[i].classList.remove("hidden")
    }
}

function showByPriority(filter){
    for (let i = 0; i < taskAux.length; i++) {
       if(taskAux[i].priority!==filter){
            taskList[i].classList.add("hidden");
       }   
    }
}
function showByOrder(position){
    let aux = [];
    for (let i = 0; i < taskList.length; i++) {
        aux[i]=taskList[i].innerHTML;        
    }
    for (let j = 0; j < taskList.length; j++) {
        taskList[j].innerHTML=aux[position[j]];
    }
}

/*OTRAS FUNCIONES */

function getTypeCategory() {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].classList.contains("task-high-priority")) {
            taskList[i].value = 0;
        }
        if (taskList[i].classList.contains("task-medium-priority")) {
            taskList[i].value = 1;
        }
        if (taskList[i].classList.contains("task-low-priority")) {
            taskList[i].value = 2;
        }
    }
}

function getTime(time) {
    let hour, min, aux;
    time = time.replace(":", "");
    hour = Number(time.substring(0, 2));
    min = Number(time.substring(2, 5));
    aux = hour * 100 + min;
    return aux;
}

function getPriorityNumber(text) {
    let num;
    switch (text) {
        case "Alta":
            num = 0;
            break;
        case "Media":
            num = 1;
            break;
        case "Baja":
            num = 2;
            break;
    }
    return num;
}

function orderTask(objectArray, condition){
    let arrayToOrder = []; 
    let positions = [];
    let aux, aux2;
    for (let i = 0; i < objectArray.length; i++) {
        positions[i] = objectArray[i].position;
        if(condition === "time"){
            arrayToOrder[i] = objectArray[i].time;
        }
        else{
            arrayToOrder[i] = objectArray[i].priority;   
        }
    }
    for (let j = 1; j < arrayToOrder.length; j++) {
        for(let k=0; k <(arrayToOrder.length-j); k++){
            if(arrayToOrder[k]>arrayToOrder[k+1]){
                aux=arrayToOrder[k];
                arrayToOrder[k]=arrayToOrder[k+1];
                arrayToOrder[k+1]=aux;
                aux2=positions[k];
                positions[k]=positions[k+1];
                positions[k+1]=aux2;
            }
        }
    }
  return positions;
}