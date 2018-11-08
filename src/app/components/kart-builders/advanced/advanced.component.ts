import { Component, OnInit } from '@angular/core';
import { KartFeatures } from 'src/app/models/KartFeatures';
import { DRIVERS } from 'src/app/services/stats/data/drivers';
import { BODIES } from 'src/app/services/stats/data/bodies';
import { TIRES } from 'src/app/services/stats/data/tires';
import { GLIDERS } from 'src/app/services/stats/data/gliders';
import { NullModel } from 'src/app/util/null-domain-models';
import Kart from 'src/app/models/Kart';


@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {

  kart: Kart = NullModel.getKart();
  featuresList = { };

  
  constructor() { }

  
  ngOnInit() {
    this.featuresInit();
    this.kartInit();
  }


  onFeatureChange(feature: KartFeatures) {
    this.kart[feature.type.toLowerCase()] = feature;
  }


  private featuresInit(): void {
    this.featuresList['ofDrivers'] = DRIVERS;
    this.featuresList['ofBodies']  = BODIES;
    this.featuresList['ofTires']   = TIRES;
    this.featuresList['ofGliders'] = GLIDERS;
  }

  
  private kartInit(): void {
    this.kart.driver = this.featuresList['ofDrivers'][0];
    this.kart.body   = this.featuresList['ofBodies'][0];
    this.kart.tires  = this.featuresList['ofTires'][0];
    this.kart.glider = this.featuresList['ofGliders'][0];
  }

}
