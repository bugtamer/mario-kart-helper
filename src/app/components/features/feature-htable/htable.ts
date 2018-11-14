import Kart from "src/app/models/Kart";
import KartFeatures from "src/app/models/KartFeatures";
import { AverageService } from "src/app/services/avg/Average.service";
import { PointsService } from "src/app/services/points/Points.service";
import { Injectable } from "@angular/core";
import KartComponentPicture from "src/app/models/KartComponentPicture";


export interface FeatureHTable {
    feature: string;
    average: number | string;
    level:   number | string;
    driver:  number | string;
    body:    number | string;
    tires:   number | string;
    glider:  number | string;
}


export class NullFeatureHTable implements FeatureHTable {
    feature = 'null';
    average = 0;
    level   = 0;
    driver  = 0;
    body    = 0;
    tires   = 0;
    glider  = 0;
}


@Injectable({
    providedIn: 'root'
})
export class Htable {

    constructor(private avg: AverageService, private pt: PointsService) { }


    getDisplayedColumns() {
        return ['feature', 'driver', 'body', 'tires', 'glider', 'level', 'average'];
    }


    kart(k: Kart): Array<FeatureHTable> {
        let tableRows: Array<FeatureHTable> = [ ];
        let d: KartFeatures = k.driver;
        let b: KartFeatures = k.body;
        let t: KartFeatures = k.tires;
        let g: KartFeatures = k.glider;
        tableRows.push( this.getRow('Name', '', '', d.name, b.name, t.name, g.name) );
        tableRows.push( this.getRow('Type', '', '', d.type, b.type, t.type, g.type) );
        tableRows.push( this.getRow('Size', '', '', d.size, b.size, t.size, g.size) );
        tableRows.push( this.getRow('Speed (average)', this.avg.speed(k), this.pt.speed(k), this.avg.path(k.driver.speed), this.avg.path(k.body.speed), this.avg.path(k.tires.speed), this.avg.path(k.glider.speed)) );
        tableRows.push( this.getRow('Speed (ground)', this.avg.speedGround(k), this.pt.speedGround(k), k.driver.speed.ground, k.driver.speed.ground, k.driver.speed.ground, k.driver.speed.ground) );
        tableRows.push( this.getRow('Speed (water)', this.avg.speed(k), this.pt.speed(k), this.avg.path(k.driver.speed), this.avg.path(k.body.speed), this.avg.path(k.tires.speed), this.avg.path(k.glider.speed)) );
        tableRows.push( this.getRow('Speed (air)', this.avg.speed(k), this.pt.speed(k), this.avg.path(k.driver.speed), this.avg.path(k.body.speed), this.avg.path(k.tires.speed), this.avg.path(k.glider.speed)) );
        tableRows.push( this.getRow('Speed (anti-gravity)', this.avg.speed(k), this.pt.speed(k), this.avg.path(k.driver.speed), this.avg.path(k.body.speed), this.avg.path(k.tires.speed), this.avg.path(k.glider.speed)) );
        tableRows.push( this.getRow('Acceleration', this.avg.acceleration(k), this.pt.acceleration(k), d.acceleration, b.acceleration, t.acceleration, g.acceleration) );
        tableRows.push( this.getRow('Weight', this.avg.weight(k), this.pt.weight(k), d.weight, b.weight, t.weight, g.weight) );
        tableRows.push( this.getRow('Handling (average)', this.avg.handling(k), this.pt.handling(k), this.avg.path(k.driver.handling), this.avg.path(k.body.handling), this.avg.path(k.tires.handling), this.avg.path(k.glider.handling)) );
        tableRows.push( this.getRow('Handling (ground)', this.avg.handlingGround(k), this.pt.handlingGround(k), k.driver.handling.ground, k.driver.handling.ground, k.driver.handling.ground, k.driver.handling.ground) );
        tableRows.push( this.getRow('Handling (water)', this.avg.handling(k), this.pt.handling(k), this.avg.path(k.driver.handling), this.avg.path(k.body.handling), this.avg.path(k.tires.handling), this.avg.path(k.glider.handling)) );
        tableRows.push( this.getRow('Handling (air)', this.avg.handling(k), this.pt.handling(k), this.avg.path(k.driver.handling), this.avg.path(k.body.handling), this.avg.path(k.tires.handling), this.avg.path(k.glider.handling)) );
        tableRows.push( this.getRow('Handling (anti-gravity)', this.avg.speed(k), this.pt.speed(k), this.avg.path(k.driver.handling), this.avg.path(k.body.handling), this.avg.path(k.tires.handling), this.avg.path(k.glider.handling)) );
        tableRows.push( this.getRow('Grid', this.avg.grid(k), this.pt.grid(k), d.grid, b.grid, t.grid, g.grid) );
        tableRows.push( this.getRow('Mini-Turbo', this.avg.miniTurbo(k), this.pt.miniTurbo(k), d.miniTurbo, b.miniTurbo, t.miniTurbo, g.miniTurbo) );
        return tableRows;
    }


    private getRow(feature: string, avg: number | string, lvl: number | string,
            driver: number | string,
            body: number | string,
            tires: number | string,
            glider: number | string):
            FeatureHTable {
    
        let row: FeatureHTable = new NullFeatureHTable();
        row.feature = feature;
        row.average = avg;
        row.level   = lvl;
        row.driver  = driver;
        row.body    = body;
        row.tires   = tires;
        row.glider  = glider;
        return row;
    }
        
}
