import { Component } from '@angular/core';
import {Counter}   from "./counter/counter";
import {Clock}   from "./clock/clock";
import  {Person}  from "./Person/Person";
import  {Multiplication}  from "./Multiplication/Multiplication";
import {TaskList}  from "./Todo/TaskList";
import {Palindrome}  from "./Palindrome/Palindrome";


 
@Component({
  selector: 'my-app',
  template: `
      <div class="row" >
         <div class="col-md-2" >
             Counter 
         </div>
         <div class="col-md-4" >
             <counter></counter> 
         </div>
      </div>
      <div class="row" >
         <div class="col-md-2" >
             Clock 
         </div>
         <div class="col-md-10" >
            <clock></clock>
         </div>
      </div>
      <div class="row" >
         <div class="col-md-2" >
             Person 
         </div>
         <div class="col-md-8" >
            <person></person>
         </div>
      </div>
      <div class="row" >
         <div class="col-md-2" >
             Multiply 
         </div>
         <div class="col-md-8" >
            <multiply></multiply>
         </div>
      </div>
      <div class="row" >
         <div class="col-md-2" >
             Palindrome 
         </div>
         <div class="col-md-8" >
            <palindrome></palindrome>
         </div>
      </div>
      <div class="row" >
         <div class="col-md-2" >
         TaskList 
         </div>
         <div class="col-md-8" >
            <tasklist></tasklist>
         </div>
      </div>
  `,
})
export class AppComponent  { name = 'Jagadeesh'; }
