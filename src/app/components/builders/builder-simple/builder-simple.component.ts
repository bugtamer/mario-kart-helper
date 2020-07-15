import { Component, OnInit } from '@angular/core';
import { Kart } from 'src/app/models/Kart';
import { NullModel } from 'src/app/util/null-domain-models';
import { PrimeNgChart } from '../../../services/charts/primeng-charts.service';
import { DRIVERS } from 'src/app/services/stats/data/drivers';
import { BODIES } from 'src/app/services/stats/data/bodies';
import { TIRES } from 'src/app/services/stats/data/tires';
import { GLIDERS } from 'src/app/services/stats/data/gliders';
import KartFeatures from 'src/app/models/KartFeatures';

@Component({
  selector: 'app-simple',
  templateUrl: './builder-simple.component.html',
  styleUrls: ['./builder-simple.component.css']
})
export class BuilderSimpleComponent implements OnInit {

  kart: Kart;
  featuresList;

  kartOptions;/* = {
    scaleOverride : true,
    scaleSteps : 23,
    scaleStepWidth : .25,
    scaleStartValue : 0 
  };*/
  featureOptions = {title: {display: true, text: 'Kart stats', fontSize: 16}, legend: {position: 'bottom'}};
  speedOptions;
  handlingOptions;
  featureChart: any;
  kartChart: any;
  speedChart: any;
  handlingChart: any;
  width = "30vw";
  height = "60vh";

  
  constructor(private chart: PrimeNgChart) { }

  
  ngOnInit() {
    this.featuresInit();
    this.kartInit();
    this.updateChart();
  }

  
  onFeatureChange(feature?): void {
    let type: string = feature.type.toLowerCase();
    this.kart[type] = feature;
    this.updateChart();
  }

  updateChart() {
    this.kartChart = this.chart.getKart(this.kart);
    this.handlingChart = this.chart.getHandling(this.kart);
    this.speedChart = this.chart.getSpeed(this.kart);
    this.kartOptions = this.chart.getKartOptions('Kart');
    this.speedOptions = this.chart.getPathOptions('Speed');
    this.handlingOptions = this.chart.getPathOptions('Handling');
    this.featureChart = this.chart.getFeatures(this.kart);
  }


  filterDrivers(event) {
    console.log('filterDrivers()', event);
    let filteredDrivers: Array<KartFeatures> = [];
    for (let i=0; i < DRIVERS.length; i++)
      if (event[ DRIVERS[i].size ])
        filteredDrivers.push( DRIVERS[i] );
    // this.featuresList['ofDrivers'].slice(0, 0);
    // for (let i=0; i < filteredDrivers.length; i++)
    //   this.featuresList['ofDrivers'].push( filteredDrivers[i] );
      console.log('filterDrivers()', filteredDrivers);
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
