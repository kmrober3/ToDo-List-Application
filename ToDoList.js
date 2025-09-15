class ToDoList {  

    constructor() {
        this.currentTasks = [];    
        this.store = localStorage; 
        this.count = 0;
    } 
    
    addItem(tasks) {  
        if (this.count == 0) {
            this.store.clear();
            this.count++;
        }
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
            this.store.setItem(t, "not done");
        }); 

        document.getElementById("clear").addEventListener("click", (event) => { 
            this.removeItem(taskDiv);  
            console.log(this.store);
        }) 
        console.log(this.store);
    } 

    removeItem(taskDiv) { 
        this.currentTasks = this.currentTasks.filter(t => { 
            let cb = document.getElementById(t);  
            if (cb.checked) {
                this.store.setItem(t, "done");
            }
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
    } 

    reloadItems() {  
        //ToDo


    }

} 

let instance = new ToDoList();

document.getElementById("press").addEventListener("click", (event) => {   
    console.log("Yes");
    let input = document.getElementById("input").value;
    instance.addItem(input); 
});  

document.getElementById("listItems").addEventListener("DOMContentLoaded", (event) => {  
    //ToDo
})