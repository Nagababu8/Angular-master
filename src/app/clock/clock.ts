import { Component } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: `./clock.html`,
})
export class Clock  { 
    time:String; 

    constructor(){
        this.time=new Date().toLocaleTimeString(); 
        setInterval(()=>{
            this.updateTime();
        },1000)
    }
    
   

    updateTime(){
        this.time=new Date().toLocaleTimeString(); 
    }




}