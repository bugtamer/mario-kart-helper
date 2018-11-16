import { Component, OnInit } from '@angular/core';
import { Kart } from 'src/app/models/Kart';
import { NullModel } from 'src/app/util/null-domain-models';
import { PrimeNgChart } from '../../../services/charts/primeng-charts.service';

@Component({
  selector: 'app-simple',
  templateUrl: './builder-simple.component.html',
  styleUrls: ['./builder-simple.component.css']
})
export class BuilderSimpleComponent implements OnInit {

  private _kart: Kart;

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
    this._kart = NullModel.getKart();
    this.updateChart();
  }

  
  onFeatureChange(feature?): void {
    let type: string = feature.type.toLowerCase();
    this._kart[type] = feature;
    this.updateChart();
  }

  updateChart() {
    this.kartChart = this.chart.getKart(this._kart);
    this.handlingChart = this.chart.getHandling(this._kart);
    this.speedChart = this.chart.getSpeed(this._kart);
    this.kartOptions = this.chart.getKartOptions('Kart');
    this.speedOptions = this.chart.getPathOptions('Speed');
    this.handlingOptions = this.chart.getPathOptions('Handling');
    this.featureChart = this.chart.getFeatures(this._kart);
  }

}
