import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddList: number[];
  evenList: number[];

  constructor(){
    this.oddList = [];
    this.evenList = [];
  }

  evaluateNewNum(eventOb: {num: number}){
    if(eventOb.num % 2 == 0)
      this.evenList.push(eventOb.num);
      else
      this.oddList.push(eventOb.num);
    
    console.log(eventOb, this.evenList, this.oddList);
  }

  clearNumLists({}){
    this.oddList = [];
    this.evenList = [];
  }
  
}
