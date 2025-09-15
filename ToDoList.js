class ToDoList {  

    constructor() {
        this.currentTasks = [];  
    }
    
    addItem(tasks) { 
        let taskDiv = document.getElementById("tasks");  
        this.currentTasks.push(tasks);    
        taskDiv.innerHTML = "";
        this.currentTasks.forEach(t => { 
            let li = document.createElement("li"); 
            let input = document.createElement("input");   
            input.type = "checkbox";    
            input.id = t; 
            li.textContent = t + " "; // add a space before button  
            li.appendChild(input); 
            taskDiv.append(li);      
        }); 

        document.getElementById("clear").addEventListener("click", (event) => {
            this.currentTasks = this.currentTasks.filter(t => { 
                let cb = document.getElementById(t);
                return !cb.checked; 
            }) 
 
            taskDiv.innerHTML = "";

            this.currentTasks.forEach(t => {
                let li = document.createElement("li");
                let input = document.createElement("input"); 
                input.id = t;
                li.textContent = t + " ";
                input.type = "checkbox"; 
                li.appendChild(input);
                taskDiv.append(li);
            })
        })
    } 

    removeItem(task, input) { 
        let specificIndex = this.currentTasks.indexOf(task);
        this.currentTasks.splice(specificIndex, 1);  
        task.remove();
        input.remove(); 
    }

} 

let instance = new ToDoList();

document.getElementById("press").addEventListener("click", (event) => {  
    console.log("Yes");
    let input = document.getElementById("input").value;
    instance.addItem(input); 
}); 