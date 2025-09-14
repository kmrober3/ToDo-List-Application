class ToDoList {  

    constructor() {
        this.currentTasks = []; 
        //this.map = new Map();  
    }
    
    addItem(tasks) { 
        let taskDiv = document.getElementById("tasks");  
        this.currentTasks.push(tasks);    
        taskDiv.innerHTML = "";
        this.currentTasks.forEach(t => { 
            let li = document.createElement("li"); 
            let button = document.createElement("button");     
            button.id = t; 
            button.textContent = "Remove";   
            //console.log(document.getElementById(t));
            li.textContent = t + " "; // add a space before button 
            li.appendChild(button); 
            taskDiv.append(li);    
            document.getElementById(t).addEventListener("click", (event) => { 
                this.removeItem(li, button);
            })
        })
    }  

    removeItem(task, button) { 
        task.remove();
        button.remove();
    }

} 

let instance = new ToDoList();

document.getElementById("press").addEventListener("click", (event) => {  
    console.log("Yes");
    let input = document.getElementById("input").value;
    instance.addItem(input); 
}); 

