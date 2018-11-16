import Kart from "src/app/models/Kart";
import { PointsService } from "src/app/services/points/Points.service";
import { AverageService } from "src/app/services/avg/Average.service";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class PrimeNgChart {
    
    driverColor = [242,  12,  27];
    bodyColor   = [ 46,  12, 242];
    tiresColor  = [  7,  98,   0];
    gliderColor = [242, 211,  12];
    avgColor    = [  0,   0,   0]; //[255,  13, 255];
    levelColor  = [169,  12, 242];


    constructor(private avg: AverageService, private points: PointsService) { }
    

    getSpeed(kart: Kart) {
        return this.getPath(kart, 'speed');
    }
    

    getHandling(kart: Kart) {
        return this.getPath(kart, 'handling');
    }


    getFeatures(kart: Kart) {
        let data: Array<DataSet> = [];
        data.push( new DataSet('Kart',   this.avgColor,    this.getKartFeatures(kart) ) );
        data.push( new DataSet('Driver', this.driverColor, this.kartToArray(kart, 'driver')) );
        data.push( new DataSet('Body',   this.bodyColor,   this.kartToArray(kart, 'body')) );
        data.push( new DataSet('Tires',  this.tiresColor,  this.kartToArray(kart, 'tires')) );
        data.push( new DataSet('Glider', this.gliderColor, this.kartToArray(kart, 'glider')) );
        return {labels: this.getFeatureLabels(), datasets: data};
    }


    getKart(kart: Kart) {
        let data: Array<number> = [ ];
        data.push( this.avg.speed(kart) );
        data.push( this.avg.acceleration(kart) );
        data.push( this.avg.weight(kart) );
        data.push( this.avg.handling(kart) );
        data.push( this.avg.grid(kart) );
        data.push( this.avg.miniTurbo(kart) );
        data.push( 0 );
        data.push( 5.75 );
        return {labels: this.getFeatureLabels(), datasets: [new DataSet('Kart', this.driverColor, data)]};
    }


    private getKartFeatures(kart: Kart) {
        let data: Array<number> = [ ];
        data.push( this.avg.speed(kart) );
        data.push( this.avg.acceleration(kart) );
        data.push( this.avg.weight(kart) );
        data.push( this.avg.handling(kart) );
        data.push( this.avg.grid(kart) );
        data.push( this.avg.miniTurbo(kart) );
        data.push( 0 );
        data.push( 5.75 );
        return data;
    }
    

    private getPath(kart: Kart, speed_or_handling: string) {
        let data: Array<DataSet> = [];
        data.push( new DataSet('Driver', this.driverColor, this.pathToArray(kart, 'driver', speed_or_handling)) );
        data.push( new DataSet('Body',   this.bodyColor,   this.pathToArray(kart, 'body',   speed_or_handling)) );
        data.push( new DataSet('Tires',  this.tiresColor,  this.pathToArray(kart, 'tires',  speed_or_handling)) );
        data.push( new DataSet('Glider', this.gliderColor, this.pathToArray(kart, 'glider', speed_or_handling)) );
        return {labels: this.getPathLabels(), datasets: data};
    }


    private pathToArray(kart: Kart, featureType: string, speed_or_handling: string): Array<number> {
        let data: Array<number> = [ ];
        // data.push( this.avg.path(kart[featureType][speed_or_handling]) );
        data.push( kart[featureType][speed_or_handling].ground );
        data.push( kart[featureType][speed_or_handling].water );
        data.push( kart[featureType][speed_or_handling].air );
        data.push( kart[featureType][speed_or_handling].antiGravity );
        data.push( 0 );
        data.push( 5.75 );
        return data;
    }


    private kartToArray(kart: Kart, featureType: string): Array<number> {
        let data: Array<number> = [ ];
        data.push( this.avg.path(kart[featureType].speed) );
        data.push( kart[featureType].acceleration );
        data.push( kart[featureType].weight );
        data.push( this.avg.path(kart[featureType].handling) );
        data.push( kart[featureType].grid );
        data.push( kart[featureType].miniTurbo );
        return data;
    }


    getKartOptions(label: string) {
        return {
            title: {display: true, text: label, fontSize: 16},
            legend: {position: 'bottom'},
            scales: {
              xAxes: [{
                  ticks: {
                      beginAtZero: true,
                      min: 0,
                      max: 6,
                      stepSize: .5,
                      maxTicksLimit: 5
                  }
              }]
            }
          };;
    }


    getPathOptions(label: string) {
        return {
            title: {display: true, text: label, fontSize: 16},
            legend: {position: 'bottom'},
            scales: {
              xAxes: [{
                  ticks: {
                      beginAtZero: true,
                      min:  0,
                      max: 10,
                      stepSize: .5,
                      maxTicksLimit: 9
                  }
              }]
            }
          };;
    }

    
    private getPathLabels() {
        return ['Ground', 'Water', 'Air', 'Anti-Gravity'];
    }

    
    private getFeatureLabels() {
        return ['Speed', 'Acceleration', 'Weight', 'Handling', 'Grid', 'Mini-Turbo'];
    }

}


class DataSet {

    label: string;
    backgroundColor: string;
    borderColor: string;
    pointBackgroundColor: string;
    pointBorderColor: string;
    pointHoverBackgroundColor: string;
    pointHoverBorderColor: string;
    data: Array<number>

    
    constructor(label: string, rgb: Array<number>, data?: Array<number>) {
        this.label = label;
        this.backgroundColor = rgba(rgb[0], rgb[1], rgb[2], 0.75);
        this.borderColor = rgba(rgb[0], rgb[1], rgb[2], 1);
        this.pointBackgroundColor = rgba(rgb[0], rgb[1], rgb[2], 1);
        this.pointBorderColor = '#fff';
        this.pointHoverBackgroundColor = '#fff';
        this.pointHoverBorderColor = rgba(rgb[0], rgb[1], rgb[2], 1);
        this.data = data || [ ];
    }

}


function rgba(red:number, green: number, blue: number, alpha: number): string {
    return `rgba(${red},${green},${blue},${alpha})`;
}
