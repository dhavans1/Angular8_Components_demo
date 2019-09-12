import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  incNum: number;
  @Output() numberEmitter = new EventEmitter<{num: number}>();
  @Output() resetEmitter = new EventEmitter<{}>();

  intervalRef: any;

  constructor() { 
    
  }

  ngOnInit() {
  }

  startGame(){    
    this.incNum = 0;
    if( this.intervalRef )
      clearInterval(this.intervalRef);

    this.intervalRef = setInterval(
      () => {
        //Get random integer
        this.incNum += Math.floor(Math.random()*10);

        this.numberEmitter.emit({num: this.incNum});
      }
      , 1000);
  }

  endGame(){
    clearInterval(this.intervalRef);
  }

  resetGame(){
    if(this.intervalRef)
      clearInterval(this.intervalRef);

    this.incNum = null;

    this.resetEmitter.emit({});
  }

}
