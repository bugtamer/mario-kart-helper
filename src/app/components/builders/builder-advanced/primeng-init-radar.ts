import Kart from "src/app/models/Kart";
import { PointsService } from "src/app/services/points/Points.service";
import { AverageService } from "src/app/services/avg/Average.service";
import { Injectable } from "@angular/core";


interface PrimengRadarChartDataSet {
    label: string,
    backgroundColor: string,
    borderColor: string,
    pointBackgroundColor: string,
    pointBorderColor: string,
    pointHoverBackgroundColor: string,
    pointHoverBorderColor: string,
    data: Array<number>
}


class DataSet implements PrimengRadarChartDataSet {

    label: string;
    backgroundColor: string;
    borderColor: string;
    pointBackgroundColor: string;
    pointBorderColor: string;
    pointHoverBackgroundColor: string;
    pointHoverBorderColor: string;
    data: Array<number>

    
    constructor(label: string, red:number, green: number, blue: number, data?: Array<number>) {
        this.label = label;
        this.backgroundColor = this.rgba(red, green, blue, 0.2);
        this.borderColor = this.rgba(red, green, blue, 1);
        this.pointBackgroundColor = this.rgba(red, green, blue, 1);
        this.pointBorderColor = '#fff';
        this.pointHoverBackgroundColor = '#fff';
        this.pointHoverBorderColor = this.rgba(red, green, blue, 1);
        this.data = data || [ ];
    }

    
    private rgba(red:number, green: number, blue: number, alpha: number): string {
        return `rgba(${red},${green},${blue},${alpha})`;
    }

}


@Injectable({
    providedIn: 'root'
})
export class RadarChart {

    constructor(private avg: AverageService, private points: PointsService) { }
    

    getSpeed(kart: Kart) {
        return this.getPath(kart, 'speed');
    }
    

    getHandling(kart: Kart) {
        return this.getPath(kart, 'handling');
    }


    getFeatures(kart: Kart) {
        let data: Array<PrimengRadarChartDataSet> = [];
        data.push( new DataSet('Driver', 255, 83,  13, this.kartToArray(kart, 'driver')) );
        data.push( new DataSet('Body',   232, 44,  12, this.kartToArray(kart, 'body')) );
        data.push( new DataSet('Tires',  255,  0,   0, this.kartToArray(kart, 'tires')) );
        data.push( new DataSet('Glider', 232, 12, 122, this.kartToArray(kart, 'glider')) );
        data.push( new DataSet('Max',    255, 13, 255, [5.75, 5.75, 5.75, 5.75, 5.75, 5.75]) );
        return {labels: this.getFeatureLabels(), datasets: data};
    }
    

    /**
     * https://color.adobe.com/es/create/color-wheel/?base=2&rule=Analogous&selected=4&name=Mi%20tema%20de%20Color&mode=rgb&rgbvalues=1,0.3270833333331894,0.050000000000000044,0.91,0.17157291666660116,0.04550000000000004,1,0,0,0.91,0.04550000000000004,0.4777500000001965,1,0.050000000000000044,0.999999999999784&swatchOrder=0,1,2,3,4
     * @param kart 
     */
    private getPath(kart: Kart, speed_or_handling: string) {
        let data: Array<PrimengRadarChartDataSet> = [];
        data.push( new DataSet('Driver', 255, 83,  13, this.pathToArray(kart, 'driver', speed_or_handling)) );
        data.push( new DataSet('Body',   232, 44,  12, this.pathToArray(kart, 'body',   speed_or_handling)) );
        data.push( new DataSet('Tires',  255,  0,   0, this.pathToArray(kart, 'tires',  speed_or_handling)) );
        data.push( new DataSet('Glider', 232, 12, 122, this.pathToArray(kart, 'glider', speed_or_handling)) );
        data.push( new DataSet('Max',    255, 13, 255, [5.75, 5.75, 5.75, 5.75, 5.75]) );
        return {labels: this.getPathLabels(), datasets: data};
    }


    private pathToArray(kart: Kart, featureType: string, speed_or_handling: string): Array<number> {
        let data: Array<number> = [ ];
        data.push( this.avg.path(kart[featureType][speed_or_handling]) );
        data.push( kart[featureType][speed_or_handling].ground );
        data.push( kart[featureType][speed_or_handling].water );
        data.push( kart[featureType][speed_or_handling].air );
        data.push( kart[featureType][speed_or_handling].antiGravity );
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

    
    private getPathLabels() {
        return ['Average', 'Ground', 'Water', 'Air', 'Anti-Gravity'];
    }

    
    private getFeatureLabels() {
        return ['Speed', 'Acceleration', 'Weight', 'Handling', 'Grid', 'Mini-Turbo'];
    }

}
