import { Component, OnInit } from '@angular/core';
import KartComponentType from 'src/app/models/KartComponentType';
import Kart from 'src/app/models/Kart';
import { NullModel } from 'src/app/util/null-domain-models';
import { AverageService } from 'src/app/services/avg/average.service';
import KartFeatures from 'src/app/models/KartFeatures';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private _kart: Kart;
  element: KartFeatures;

  
  constructor(private _avg: AverageService) { }

  
  ngOnInit() {
    this.element = NullModel.getKartFeatures()
    this._kart = NullModel.getKart();
    this._kart.driver.type = KartComponentType.Driver;
    this._kart.body.type = KartComponentType.Body;
    this._kart.tires.type = KartComponentType.Tires;
    this._kart.glider.type = KartComponentType.Glider;
  }

  
  onFeatureChange(kFeature?): void {
    switch(kFeature.type) {
      case KartComponentType.Driver: this._kart.driver = kFeature; break;
      case KartComponentType.Body: this._kart.body = kFeature; break;
      case KartComponentType.Tires: this._kart.tires = kFeature; break;
      case KartComponentType.Glider: this._kart.glider = kFeature; break;
    }
    this.element = this._avg.kart(this._kart);
  }

}
