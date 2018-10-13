import { Component, OnInit, Input } from '@angular/core';
import KartFeatures from 'src/app/models/KartFeatures';
import { DummyModel } from 'src/app/util/dummy-model';

@Component({
  selector: 'app-kart-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input()
  type;

  kartFeatures: KartFeatures = DummyModel.getKartFeatures();

  
  constructor() { }
  
  ngOnInit() { }


  updateKartFeatures(newFeatures: KartFeatures): void {
    this.kartFeatures = newFeatures;
  }
  
}
