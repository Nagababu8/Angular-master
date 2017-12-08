import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule }  from "@angular/forms";

import {Counter}   from "./counter/counter";
import {Clock}   from "./clock/clock";
import {Person}  from "./Person/Person";
import {Multiplication}  from "./Multiplication/Multiplication";
import {Palindrome}  from "./Palindrome/Palindrome";
import {TaskList}  from "./Todo/TaskList";
import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent ,Counter,Clock,Person,Multiplication,Palindrome,TaskList],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
