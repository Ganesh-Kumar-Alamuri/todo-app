
let count=Number(localStorage.getItem("count"));
console.log(localStorage.getItem("tasks"));
let tasks=JSON.parse(localStorage.getItem("tasks")==null?JSON.stringify([]):localStorage.getItem("tasks"));
console.log(tasks);
let out='';
    tasks.forEach(task => {
        
        out+=`
        <div class="task card" style="padding:5px" id="task_${task.id}">
        <div class="card-body row">
            <div class="details col-9 ">
                <h5 class="card-title"> Task ${task.id+1}</h5>
                <input type="date"  id="due_date_${task.id}" style="border: 0;" disabled value=${task.due_date}>
                <input type="text-area" class="card-text col-12" id="desc_${task.id}" value=${task.description} style="border: 0;" disabled>
                
            </div>
            <div class="actions col-3" >
                <button class="col-5 edit"><i class="fa fa-pencil-square-o" value=${task.id} ></i></button>
                <button class="col-5 delete" onclick=deleteTask(${task.id})><i class="fa fa-trash" value=${task.id}></i></button>
            </div>
        </div>
    </div>
        
        `;
    });
    
    
document.getElementById("tasks").innerHTML=out;

document.getElementById("add_task").addEventListener("click",addTask)
function addTask(e){
    e.preventDefault();
    let task_new={
        id:Number(localStorage.getItem("count")),
        description:document.getElementById("desc").value,
        due_date:document.getElementById("t_date").value
    };
    localStorage.setItem("count",Number(localStorage.getItem("count"))+1);
    console.log(localStorage.getItem("count"));
    let tasks=JSON.parse(localStorage.getItem("tasks")==null?JSON.stringify([]):localStorage.getItem("tasks"));
    console.log(tasks);
    tasks[Number(localStorage.getItem("count"))-1]=task_new;
    localStorage.setItem("tasks",JSON.stringify(tasks));
    
    let out='';
    let count=localStorage.getItem("count");
    
        let task=tasks[count-1];
        
        out+=`
        <div class="task card" style="padding:5px" id="task_${task.id}">
        <div class="card-body row">
            <div class="details col-9 ">
                <h5 class="card-title"> Task ${task.id+1}</h5>
                <input type="date"  id="due_date_${task.id}" style="border: 0;" disabled value=${task.due_date}>
                <input type="text-area" class="card-text col-12" id="desc_${task.id}" value=${task.description} style="border: 0;" disabled>
                
            </div>
            <div class="actions col-3" >
                <button class="col-5 edit"><i class="fa fa-pencil-square-o" value=${task.id} ></i></button>
                <button class="col-5 delete" onclick="deleteTask(${task.id})"><i class="fa fa-trash" value=${task.id}></i></button>
            </div>
        </div>
    </div>
        
        `;
    
    
    
    document.getElementById("tasks").innerHTML+=out;

    
}
//document.getElementsByClassName("delete").addEventListener("click",deleteTask)

function deleteTask(e){
    
    document.getElementById("task_"+e).remove();
    let task=JSON.parse(localStorage.getItem("tasks"))
   delete task[e];
   localStorage.setItem("tasks",JSON.stringify(task))
}