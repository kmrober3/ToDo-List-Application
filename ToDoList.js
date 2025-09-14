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
            button.textContent = "Remove";
            li.textContent = t + " "; // add a space before button 
            li.appendChild(button); 
            taskDiv.append(li);  
        })
    } 

    removeItem(tasks) {  
        let removeTasksIndex = this.currentTasks.indexOf(tasks); 
        this.currentTasks.splice(removeTasksIndex, 1);   
        document.getElementById("tasks").textContent = "";
        document.getElementById("tasks").textContent = this.currentTasks;
    } 

} 

let instance = new ToDoList();

document.getElementById("press").addEventListener("click", (event) => {  
    //console.log("Yes");
    let input = document.getElementById("input").value;
    instance.addItem(input); 
})