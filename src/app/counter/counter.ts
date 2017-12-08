import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: `./counter.html`,
})
export class Counter  { 
    count:number=0; 

    increment(){
        this.count++;
    }
}