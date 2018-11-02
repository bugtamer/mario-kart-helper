import { Component, OnInit } from '@angular/core';
import KartComponentType from 'src/app/models/KartComponentType';
import { Kart } from 'src/app/models/Kart';
import { NullModel } from 'src/app/util/null-domain-models';
import { AverageService } from 'src/app/services/avg/Average.service';
import KartFeatures from 'src/app/models/KartFeatures';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  private _kart: Kart;
  element: KartFeatures;

  
  constructor(private _avg: AverageService) { }

  
  ngOnInit() {
    this.element = NullModel.getKartFeatures()
    this._kart   = NullModel.getKart();
    this._kart.driver.type = KartComponentType.Driver;
    this._kart.body.type   = KartComponentType.Body;
    this._kart.tires.type  = KartComponentType.Tires;
    this._kart.glider.type = KartComponentType.Glider;
  }

  
  onFeatureChange(feature?): void {
    switch(feature.type) {
      case KartComponentType.Driver:
        this._kart.driver = feature;
        break;

      case KartComponentType.Body:
        this._kart.body = feature;
        break;

      case KartComponentType.Tires:
        this._kart.tires = feature;
        break;

      case KartComponentType.Glider:
        this._kart.glider = feature;
        break;
    }
    this.setElement(this._kart);
  }


  setElement(kart: Kart) {
    this.element.speed.ground         = this._avg.speedGround(kart);
    this.element.speed.water          = this._avg.speedWater(kart);
    this.element.speed.air            = this._avg.speedAir(kart);
    this.element.speed.antiGravity    = this._avg.speedAntiGravity(kart);
    this.element.acceleration         = this._avg.acceleration(kart);
    this.element.weight               = this._avg.weight(kart);
    this.element.handling.ground      = this._avg.handlingGround(kart);
    this.element.handling.water       = this._avg.handlingWater(kart);
    this.element.handling.air         = this._avg.handlingAir(kart);
    this.element.handling.antiGravity = this._avg.handlingAntiGravity(kart);
    this.element.grid                 = this._avg.grid(kart);
    this.element.miniTurbo            = this._avg.miniTurbo(kart);
  }

}
