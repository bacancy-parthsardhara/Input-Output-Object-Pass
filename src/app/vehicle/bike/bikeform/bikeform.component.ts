import { Component, OnInit } from '@angular/core';
import { Ibike } from '../ibike';

@Component({
  selector: 'app-bikeform',
  templateUrl: './bikeform.component.html',
  styleUrls: ['./bikeform.component.css']
})
export class BikeformComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  bikeObj : Ibike;
  bikeObj1: Ibike = {
    bikeBrand: null,
    bikeModel: null,
    bikeNumber:null
  }

  bikeform():void{
    this.bikeObj ={
      bikeBrand : this.bikeObj1.bikeBrand,
      bikeModel:this.bikeObj1.bikeModel,
      bikeNumber : this.bikeObj1.bikeNumber
    }
    console.log(this.bikeObj);
  }
}
