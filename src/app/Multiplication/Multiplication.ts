import { Component } from '@angular/core';

@Component({
  selector: 'multiply',
  templateUrl: `./multiply.html`,
})
export class Multiplication  { 
   n:number=10;
   tableLength:number[]=[];
  
   showTable(){
       this.tableLength=[];
       for(let i=1;i<=10;i++){
        this.tableLength.push(i);
       }
   }
}