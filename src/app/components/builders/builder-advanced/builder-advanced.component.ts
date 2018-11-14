import { Component, OnInit } from '@angular/core';
import { KartFeatures } from 'src/app/models/KartFeatures';
import { DRIVERS } from 'src/app/services/stats/data/drivers';
import { BODIES } from 'src/app/services/stats/data/bodies';
import { TIRES } from 'src/app/services/stats/data/tires';
import { GLIDERS } from 'src/app/services/stats/data/gliders';
import Kart from 'src/app/models/Kart';
import { NullModel } from 'src/app/util/null-domain-models';
import { RadarChart } from './primeng-init-radar';


@Component({
  selector: 'app-builder-advanced',
  templateUrl: './builder-advanced.component.html',
  styleUrls: ['./builder-advanced.component.css']
})
export class BuilderAdvancedComponent implements OnInit {

  kart: Kart;
  featuresList;

  featureOptions = {title: {display: true, text: 'Features', fontSize: 16}, legend: {position: 'bottom'}};
  handlingOptions = {title: {display: true, text: 'Handling', fontSize: 16}, legend: {position: 'bottom'}};
  speedOptions = {title: {display: true, text: 'Speed', fontSize: 16}, legend: {position: 'bottom'}};
  
  featureRadar: any;
  handlingRadar: any;
  speedRadar: any;

  
  constructor(private chart: RadarChart) { }

  
  ngOnInit() {
    this.featuresInit();
    this.kartInit();
    this.featureRadar = this.chart.getFeatures(this.kart);
    this.handlingRadar = this.chart.getHandling(this.kart);
    this.speedRadar = this.chart.getSpeed(this.kart);
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
