import { Component, OnInit } from '@angular/core';
import { Kart } from 'src/app/models/Kart';
import { NullModel } from 'src/app/util/null-domain-models';

@Component({
  selector: 'app-simple',
  templateUrl: './builder-simple.component.html',
  styleUrls: ['./builder-simple.component.css']
})
export class SimpleComponent implements OnInit {

  private _kart: Kart;

  
  constructor() { }

  
  ngOnInit() {
    this._kart = NullModel.getKart();
  }

  
  onFeatureChange(feature?): void {
    let type: string = feature.type.toLowerCase();
    this._kart[type] = feature;
  }

}
