import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Icar } from '../icar';
@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.css']
})
export class CarformComponent implements OnInit {
  
  @Output() carvar = new EventEmitter();

  carObj: Icar;

  carObj1: Icar = {
    carBrand: null,
    carModel: null,
    carNumber: null
  }

  carclick(): void{
    this.carObj = {
      carBrand : this.carObj1.carBrand,
      carModel :this.carObj1.carModel,
      carNumber :this.carObj1.carNumber
    }
    this.carvar.emit(this.carObj);
  }

  constructor() { }

  ngOnInit() {
  }
  
}
