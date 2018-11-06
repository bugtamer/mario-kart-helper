import { Injectable } from '@angular/core';

import { AverageService } from '../avg/Average.service';
import { KartFeatures } from '../../models/KartFeatures';


export interface TabularFeature {
    totalPoints: number;
    name: string;
    image: string;
    speed: number;
    speedGround: number;
    speedWater: number;
    speedAir: number;
    speedAntiGravity: number;
    acceleration: number;
    weight: number;
    handling: number;
    handlingGround: number;
    handlingWater: number;
    handlingAir: number;
    handlingAntiGravity: number;
    grid: number;
    miniTurbo: number;
}


export class NullTabularFeature implements TabularFeature {
    totalPoints: 0;
    name: 'stub';
    image: '#';
    speed: 0;
    speedGround: 0;
    speedWater: 0;
    speedAir: 0;
    speedAntiGravity: 0;
    acceleration: 0;
    weight: 0;
    handling: 0;
    handlingGround: 0;
    handlingWater: 0;
    handlingAir: 0;
    handlingAntiGravity: 0;
    grid: 0;
    miniTurbo: 0;
}


@Injectable({
    providedIn: 'root'
  })
export class ParseFeatureService {

    constructor(private avg: AverageService) { }

    
    toTabularFeatureArray(input: Array<KartFeatures>): Array<TabularFeature> {
        let output: Array<TabularFeature> = [];
        for (let i=0; i < input.length; i++)
            output.push( this.toTabularFeature(input[i]) );
        return output;
    }


    toTabularFeature(input: KartFeatures): TabularFeature {
        let output: TabularFeature =  new NullTabularFeature();
        output['totalPoints']  = this.getTotalPoints(input);
        output['name'] = input.name;
        output['image'] = input.image.url;

        output['speed']            = this.avg.path(input.speed);
        output['speedGround']      = input.speed.ground;
        output['speedWater']       = input.speed.water;
        output['speedAir']         = input.speed.air;
        output['speedAntiGravity'] = input.speed.antiGravity;

        output['acceleration'] = input.acceleration;
        output['weight']       = input.weight;

        output['handling']            = this.avg.path(input.handling);
        output['handlingGround']      = input.handling.ground;
        output['handlingWater']       = input.handling.water;
        output['handlingAir']         = input.handling.air;
        output['handlingAntiGravity'] = input.handling.antiGravity;

        output['grid']      = input.grid;
        output['miniTurbo'] = input.miniTurbo;
        return output;
    }


    private getTotalPoints(input: KartFeatures): number {
        let totalPoints: number = 0;
        totalPoints += input.speed.ground;
        totalPoints += input.speed.water;
        totalPoints += input.speed.air;
        totalPoints += input.speed.antiGravity;
        totalPoints += input.acceleration;
        totalPoints += input.weight;
        totalPoints += input.handling.ground;
        totalPoints += input.handling.water;
        totalPoints += input.handling.air;
        totalPoints += input.handling.antiGravity;
        totalPoints += input.grid;
        totalPoints += input.miniTurbo;
        return totalPoints;
    }

}
