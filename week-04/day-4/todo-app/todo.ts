import { write } from "fs";

const fs = require("fs");
const args: string[] = process.argv.slice(2);

const listOfElements: string[] = fs.readFileSync("todo.txt", {encoding:'utf8', flag:'r'}).split("\n")

function interact(): void {
    if (args[0] === undefined) {
        console.log("Command Line Todo application\n=============================\nCommand line arguments:\n-l   Lists all the tasks\n-a   Adds a new task\n-r   Removes an task\n-c   Completes a task")
    } else if (args[0] === "-a") {
        listOfElements.push(args[1] + " [ ]")
    } else if (args[0] === "-l") {
        if (listOfElements === []) {
            console.log("No task on the todo list.")
        } else {
            console.log(listOfElements)
        }      
    } else if (args[0] === "-r") { 
        listOfElements.splice(listOfElements.indexOf(args[1]), 1)
    }
}

interact();

fs.writeFileSync("todo.txt", listOfElements.join("\n"))




