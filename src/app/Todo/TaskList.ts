import { Component } from '@angular/core';
import {TodoTask}  from "./TodoTask";



@Component({
  selector: 'tasklist',
  templateUrl: `./tasklist.html`,
})
export class TaskList  { 
   todoItem:TodoTask[]=[];
   constructor(){
      this.todoItem.push(new TodoTask("Buy Water", "Pending"));
      this.todoItem.push(new TodoTask("Buy Sugar", "Pending"));
      this.todoItem.push(new TodoTask("Buy Rice",  "Pending"));
      this.todoItem.push(new TodoTask("Buy Wheat", "Pending"));
   }
    
}