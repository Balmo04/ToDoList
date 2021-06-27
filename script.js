/* PESTAÑA */
const btnNav = document.getElementsByClassName("btn-nav")
const tabToDo = document.getElementById("make-task");
const tabToSee = document.getElementById("view-task");
/* INPUTS */
const taskName = document.getElementById("title");
const taskTime = document.getElementById("time");
const priority = document.getElementsByClassName("btn-priority");
const taskComment = document.getElementById("comment");
/*SAVE*/
const btnTask = document.getElementById("save");
/* MENSAJES DE ERROR */
const msgError = document.getElementsByClassName("msg-error");
/* MENSAJE DE GUARDADO */
const msgSave = document.getElementById("msg-save");

for (let i = 0; i < btnNav.length; i++) {
   btnNav[i].addEventListener("click", function(){
    if(!i){
        tabToSee.classList.replace("visible", "hidden");
        tabToDo.classList.replace("hidden", "visible");
    }
    else{
        tabToDo.classList.replace("visible", "hidden");
        tabToSee.classList.replace("hidden", "visible");
    }
   });
}

btnTask.addEventListener("click", function(){
    let isContent = validateInputs();
    let isSelected = validateRadioButtons();
    if(isContent && isSelected){ 
        msgSave.classList.replace("hidden", "flex");
        createTask();
        setTimeout(()=>{
            saveMessage();
            resetForm()
        },750)
    }
});

function validateInputs (){
    let temp=[];
    if(taskName.value){
        msgError[0].classList.replace("flex", "hidden");
        temp[0]=true
    }
    else{
        msgError[0].classList.replace("hidden", "flex");
        temp[0]=false;
    }
    if(taskTime.value) {
        msgError[1].classList.replace("flex", "hidden");
        temp[1]=true
    }
    else{
        msgError[1].classList.replace("hidden", "flex");
        temp[1]=false;
    }
    if(taskComment.value) {
        msgError[3].classList.replace("flex", "hidden");
        temp[2]=true
    }
    else{
        msgError[3].classList.replace("hidden", "flex");
        temp[2]=false;
    }
    return ((temp[0]&&temp[1]&&temp[2]))
}

function validateRadioButtons(){
    for (let i = 0; i < priority.length; i++) {
        if(priority[i].checked){
            msgError[2].classList.replace("flex", "hidden");
            return true;
        }
        else{
            msgError[2].classList.replace("hidden", "flex");
        }  
    }
}

function saveMessage(){
    msgSave.classList.replace("flex", "hidden");
}
function resetForm(){
    
}

function createTask(){

}
/* for (let i = 0; i < array.length; i++) {
   
    
} */
