class ToDoList {  

    constructor() {
        this.currentTasks = [];    
        this.store = localStorage; 
        this.count = 0;
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
            this.store.setItem(t, "not done");
        }); 

        document.getElementById("clear").addEventListener("click", (event) => { 
            this.removeItem(taskDiv);  
            //console.log(this.store);
        }) 
        //console.log(this.store);
    } 

    removeItem(taskDiv) {  
        console.log(this.currentTasks);
        this.currentTasks = this.currentTasks.filter(t => { 
            let cb = document.getElementById(t);    
            if (cb.checked) { 
                console.log("HI");
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
        }); 
        //console.log(this.store);
    } 

    reloadItems() {   
        let taskDiv = document.getElementById("tasks");
        taskDiv.innerHTML = "";   
        let i = 0; 
        //console.log(this.store);
        while (i < this.store.length) { 
            //console.log("inside");
            if (this.store.getItem(this.store.key(i)) == "not done") {
                let li = document.createElement("li");
                let input = document.createElement("input");
                input.type = "checkbox";  
                input.id = this.store.key(i); 
                li.textContent = this.store.key(i) + " ";
                li.appendChild(input);
                taskDiv.append(li); 

                document.getElementById("clear").addEventListener("click", (event) => { 
                    this.removeItem(taskDiv);  
                    //console.log(this.store);
                })  
                this.currentTasks.push(this.store.key(i));
            } 
            i++;
        } 
        console.log(this.store);
    }

} 

let instance = new ToDoList();

document.getElementById("press").addEventListener("click", (event) => {   
    //console.log("Yes");
    let input = document.getElementById("input").value;
    instance.addItem(input); 
});  

document.addEventListener("DOMContentLoaded", (event) => {  
    //console.log("HI"); 
    instance.reloadItems();
})