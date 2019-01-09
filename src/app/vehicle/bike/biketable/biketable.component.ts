import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ibike } from '../ibike';

@Component({
  selector: 'app-biketable',
  templateUrl: './biketable.component.html',
  styleUrls: ['./biketable.component.css']
})
export class BiketableComponent implements OnChanges{

    
    @Input('bikeObj2') bikedatapart: Ibike;
    bikeArray: Array<Ibike> = [];

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
    if(changes &&changes.bikedatapart && changes.bikedatapart.firstChange == false)
    {
      this.bikeArray.push(this.bikedatapart);
    }
    else{
      console.log("welcome");
    }
  }
}
