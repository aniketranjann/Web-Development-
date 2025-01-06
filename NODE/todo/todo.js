const fs = require("fs");
const filePath = "./task.json";
// we will be cmd line application

const loadTasks = () => {
  // Read file
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  // we have to write to the file now.
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
  
};

const addTask = (task) => {
  /* in order to add the task 
    1. Load the existing task
    2. Loading will happend through task.json
    3. in that array we can go ahead and push it.
    4. Write a method first to load the task.
*/

  const tasks = loadTasks();
  tasks.push({task});
  saveTasks(tasks);
  console.log("Task added", task);
};

const listTasks = () =>
{
   const tasks = loadTasks(); 
   tasks.forEach((task,index)=>
{
    console.log(`${index+1} - ${task.task}`);
    
})
}

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found");
}
