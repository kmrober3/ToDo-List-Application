class ToDoList {  

    constructor() {
        this.currentTasks = [];  
    }
    
    addItem(tasks) {
        this.currentTasks.push(tasks); 
        document.getElementById("tasks").textContent = this.currentTasks; 
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