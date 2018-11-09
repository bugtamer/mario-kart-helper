import { Component, OnInit } from '@angular/core';
import { KartFeatures } from 'src/app/models/KartFeatures';
import { DRIVERS } from 'src/app/services/stats/data/drivers';
import { BODIES } from 'src/app/services/stats/data/bodies';
import { TIRES } from 'src/app/services/stats/data/tires';
import { GLIDERS } from 'src/app/services/stats/data/gliders';
import Kart from 'src/app/models/Kart';
import { NullModel } from 'src/app/util/null-domain-models';


@Component({
  selector: 'app-builder-advanced',
  templateUrl: './builder-advanced.component.html',
  styleUrls: ['./builder-advanced.component.css']
})
export class AdvancedComponent implements OnInit {

  kart: Kart;
  featuresList;

  
  constructor() { }

  
  ngOnInit() {
    this.featuresInit();
    this.kartInit();
  }


  onFeatureChange(feature: KartFeatures) {
    this.kart[feature.type.toLowerCase()] = feature;
  }


  private featuresInit(): void {
    this.featuresList = { };
    this.featuresList['ofDrivers'] = DRIVERS;
    this.featuresList['ofBodies']  = BODIES;
    this.featuresList['ofTires']   = TIRES;
    this.featuresList['ofGliders'] = GLIDERS;
  }

  
  private kartInit(): void {
    this.kart = NullModel.getKart();
    this.kart.driver = this.featuresList['ofDrivers'][0];
    this.kart.body   = this.featuresList['ofBodies'][0];
    this.kart.tires  = this.featuresList['ofTires'][0];
    this.kart.glider = this.featuresList['ofGliders'][0];
  }

}
