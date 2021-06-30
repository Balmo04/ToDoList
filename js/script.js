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
    btnNav[i].addEventListener("click", function () {
        if (!i) {
            tabToSee.classList.replace("visible", "hidden");
            tabToDo.classList.replace("hidden", "visible");
        }
        else {
            tabToDo.classList.replace("visible", "hidden");
            tabToSee.classList.replace("hidden", "visible");
        }
    });
}

btnTask.addEventListener("click", function () {
    let isContent = validateInputs();
    let isSelected = pressRadioButton();
    if (isContent && isSelected) {
        imprintTask(taskName.value, taskTime.value, positionRadio, taskComment.value);
        msgSave.classList.replace("hidden", "flex");
        setTimeout(() => {
            resetForm()
        }, 750)
    }
});

function validateInputs() {
    let temp = true;
    let values = [taskName.value, taskTime.value, "", taskComment.value];
    for (let i = 0; i < 4; i++) {
        if (i === 2) {
            i = 3;
        }
        if (values[i]) {
            msgError[i].classList.replace("flex", "hidden");
            temp = temp && true;
        }
        else {
            msgError[i].classList.replace("hidden", "flex");
            temp = temp && false;
        }
    }
    return (temp);
}

function pressRadioButton() {
    for (let i = 0; i < levelPriority.length; i++) {
        if (levelPriority[i].checked) {
            positionRadio = i;
            msgError[2].classList.replace("flex", "hidden");
            return true;
        }
        else {
            msgError[2].classList.replace("hidden", "flex");
        }
    }
}

function resetForm() {
    taskName.value = "";
    taskTime.value = "";
    for (let i = 0; i < levelPriority.length; i++) {
        levelPriority[i].checked = false;
    }
    taskComment.value = "";
    msgSave.classList.replace("flex", "hidden");
}

function imprintTask(title, time, priority, comment) {
    let priorityText;
    switch (priority) {
        case 0:
            priorityText = "Alta";
            priority = "high";
            break;
        case 1:
            priorityText = "Media";
            priority = "medium";
            break;
        case 2:
            priorityText = "Baja";
            priority = "low";
            break;
    }
    containerTask.innerHTML+=`
    <div class="task-${priority}-priority task-list border-task">
         <hgroup class="bg-${priority} flex task-type-style">
             <h4 class="time-text">${time}</h4>
             <h4 class="priority-text">${priorityText}</h4>
         </hgroup>
         <article>
             <h2 class="task-title-style">${title}</h2>
             <p class="task-description-style">${comment}</p>
         </article>
     </div>
    `;
}