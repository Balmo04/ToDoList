/* PESTAÑA */
const btnNav = document.getElementsByClassName("btn-nav")
const tabToDo = document.getElementById("make-task");
const tabToSee = document.getElementById("view-task");
/* INPUTS */
const taskName = document.getElementById("title");
const taskTime = document.getElementById("time");
const levelPriority = document.getElementsByClassName("btn-priority");
const taskComment = document.getElementById("comment");
/*SAVE*/
const btnTask = document.getElementById("save");
/* MENSAJES DE ERROR */
const msgError = document.getElementsByClassName("msg-error");
/* MENSAJE DE GUARDADO */
const msgSave = document.getElementById("msg-save");
/* DIV DE TAREAS */
const containerTask = document.getElementById("container-task");

let positionRadio;

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
    let isSelected = pressRadioButton();
    if(isContent && isSelected){ 
        saveMessage(taskName.value, taskTime.value, positionRadio, taskComment.value);
        msgSave.classList.replace("hidden", "flex");
        setTimeout(()=>{  
            resetForm()
        },750)
    }
});

function validateInputs (){
    let temp=[];
    if(taskName.value){
        msgError[0].classList.replace("flex", "hidden");
        temp[0]=true;
    }
    else{
        msgError[0].classList.replace("hidden", "flex");
        temp[0]=false;
    }
    if(taskTime.value) {
        msgError[1].classList.replace("flex", "hidden");
        temp[1]=true;
    }
    else{
        msgError[1].classList.replace("hidden", "flex");
        temp[1]=false;
    }
    if(taskComment.value) {
        msgError[3].classList.replace("flex", "hidden");
        temp[2]=true;
    }
    else{
        msgError[3].classList.replace("hidden", "flex");
        temp[2]=false;
    }
    return  (temp[0]&&temp[1]&&temp[2]);
}

function pressRadioButton(){
    for (let i = 0; i < levelPriority.length; i++) {
        if(levelPriority[i].checked){
            positionRadio=i;
            msgError[2].classList.replace("flex", "hidden"); 
            return true;   
        }
        else{  
            msgError[2].classList.replace("hidden", "flex"); 
        }  
    }
}

function saveMessage(title, time, priority, comment){
    imprintTask(title, time, priority, comment);
   
}

function resetForm(){
    taskName.value="";
    taskTime.value="";
    for (let i = 0; i <levelPriority.length; i++) { 
       levelPriority[i].checked=false;
    }
    taskComment.value="";
    msgSave.classList.replace("flex", "hidden");
}

function imprintTask(title, time, priority, comment){
   switch (priority){
        case 0:
           containerTask.innerHTML+=`
           <div class="task-high-priority task-list border-task">
                <hgroup class="bg-high flex task-type-style">
                    <h4>${time}</h4>
                    <h4>Alta</h4>
                </hgroup>
                <article>
                    <h2 class="task-title-style">${title}</h2>
                    <p class="task-description-style">${comment}</p>
                </article>
            </div>
           `;
           break;
        case 1:
            containerTask.innerHTML+=`
            <div class="task-medium-priority task-list border-task">
            <hgroup class="bg-medium flex task-type-style">
                <h4>${time}</h4>
                <h4>Media</h4>
            </hgroup>
            <article>
                <h2 class="task-title-style">${title}</h2>
                <p class="task-description-style">${comment}</p>
            </article>
             </div> 
            `;
            break;
        case 2:
                containerTask.innerHTML+=`
                <div class="task-low-priority task-list border-task">
                <hgroup class="bg-low flex task-type-style">
                    <h4>${time}</h4>
                    <h4>Baja</h4>
                </hgroup>
                <article>
                    <h2 class="task-title-style">${title}</h2>
                    <p class="task-description-style">${comment}</p>
                </article>
                 </div>
               `
            break;
   }
}