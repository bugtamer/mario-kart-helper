import { Component, OnInit, Input, Output } from '@angular/core';
import KartFeatures from 'src/app/models/KartFeatures';
import { DummyModel } from 'src/app/util/dummy-model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kart-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input()
  type;
  
  @Output('featureChange')
  private _event: EventEmitter<KartFeatures> = new EventEmitter<KartFeatures>();

  kartFeatures: KartFeatures = DummyModel.getKartFeatures();

  
  constructor() { }
  
  ngOnInit() { }


  updateKartFeatures(newFeatures: KartFeatures): void {
    this.kartFeatures = newFeatures;
    this._event.emit(newFeatures);
  }
  
}
