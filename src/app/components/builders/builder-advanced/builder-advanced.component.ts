import { Component, OnInit } from '@angular/core';
import { KartFeatures } from 'src/app/models/KartFeatures';
import { DRIVERS } from 'src/app/services/stats/data/drivers';
import { BODIES } from 'src/app/services/stats/data/bodies';
import { TIRES } from 'src/app/services/stats/data/tires';
import { GLIDERS } from 'src/app/services/stats/data/gliders';
import Kart from 'src/app/models/Kart';
import { NullModel } from 'src/app/util/null-domain-models';
import { PrimeNgChart } from '../../../services/charts/primeng-charts.service';


@Component({
  selector: 'app-builder-advanced',
  templateUrl: './builder-advanced.component.html',
  styleUrls: ['./builder-advanced.component.css']
})
export class BuilderAdvancedComponent implements OnInit {

  kart: Kart;
  featuresList;
  selectedItemName = { };

  charts = { };
  chartOptions = { };
  chartWidth = "25vw";
  chartHeight = "50vh";

  
  constructor(private chart: PrimeNgChart) { }

  
  ngOnInit() {
    this.featuresInit();
    this.kartInit();
    this.chartInit();
  }


  onFeatureChange(feature: KartFeatures) {
    console.log('onFeatureChange(feature)', feature);
    this.kart[feature.type.toLowerCase()] = feature;
    this.selectedItemName[feature.type] = feature.name;
    this.chartInit();
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
    this.onFeatureChange( this.featuresList['ofDrivers'][0] );
    this.onFeatureChange( this.featuresList['ofBodies'][0] );
    this.onFeatureChange( this.featuresList['ofTires'][0] );
    this.onFeatureChange( this.featuresList['ofGliders'][0] );
  }


  private chartInit(): void {
    this.chartOptions['kart']     = this.chart.getKartOptions('Kart');
    this.chartOptions['features'] = this.chart.getFeatureOptions('Kart stats');
    this.chartOptions['handling'] = this.chart.getPathOptions('Handling');
    this.chartOptions['speed']    = this.chart.getPathOptions('Speed');

    this.charts['kart']     = this.chart.getKart(this.kart);
    this.charts['features'] = this.chart.getFeatures(this.kart);
    this.charts['handling'] = this.chart.getHandling(this.kart);
    this.charts['speed']    = this.chart.getSpeed(this.kart);
  }

}
