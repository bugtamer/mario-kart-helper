import { Component, OnInit, Input } from '@angular/core';
import KartFeatures from 'src/app/models/KartFeatures';

@Component({
  selector: 'app-kart-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input()
  type;

  kartFeatures: KartFeatures = new KartFeatures(null, null, null, 0, 0, null, 0, 0, null, null);

  
  constructor() { }
  
  ngOnInit() { }


  updateKartFeatures(newFeatures: KartFeatures): void {
    this.kartFeatures = newFeatures;
  }
  
}
