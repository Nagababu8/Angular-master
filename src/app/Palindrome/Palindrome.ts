import { Component } from '@angular/core';

@Component({
  selector: 'palindrome',
  templateUrl: `./palindrome.html`,
})
export class Palindrome  { 
  str:string="";

  reverseStr(){
      return this.str.split("").reverse().join("");
  }
}