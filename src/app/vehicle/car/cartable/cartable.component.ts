import { Component, OnInit } from '@angular/core';
import { Icar } from '../icar';

@Component({
  selector: 'app-cartable',
  templateUrl: './cartable.component.html',
  styleUrls: ['./cartable.component.css']
})
export class CartableComponent implements OnInit {

  carArray : Array<Icar> = [];

  oncarclick(param){
    this.carArray.push(param);
    console.log(this.carArray);
  }
  constructor() { }
 ngOnInit(){}
}
