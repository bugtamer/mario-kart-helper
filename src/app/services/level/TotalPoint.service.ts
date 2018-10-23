import { Injectable } from '@angular/core';
import { Kart } from '../../models/Kart';
import { KartPath } from '../../models/KartPath';
import { KartFeatures } from 'src/app/models/KartFeatures';
import { NullModel } from 'src/app/util/null-domain-models';

@Injectable({
    providedIn: 'root'  })
export class TotalPointService {
    
    /**
     * get total points of speed or handling
     * @param path 
     */
    path(path: KartPath): number {
        return path.ground + path.water + path.air + path.antiGravity;
    }


    /**
     * get a kart which each feature represents its total points
     * @param kart 
     */
    kart(kart: Kart): KartFeatures {
        let features: KartFeatures = NullModel.getKartFeatures();
        features.speed.ground = this.pathItem(kart, 'speed', 'ground');
        features.speed.water = this.pathItem(kart, 'speed', 'water');
        features.speed.air = this.pathItem(kart, 'speed', 'air');
        features.speed.antiGravity = this.pathItem(kart, 'speed', 'antiGravity');
        features.acceleration = this.feature(kart, 'acceleration');
        features.weight = this.feature(kart, 'weight');
        features.handling.ground = this.pathItem(kart, 'handling', 'ground');
        features.handling.water = this.pathItem(kart, 'handling', 'water');
        features.handling.air = this.pathItem(kart, 'handling', 'air');
        features.handling.antiGravity = this.pathItem(kart, 'handling', 'antiGravity');
        features.grid = this.feature(kart, 'grid');
        features.miniTurbo = this.feature(kart, 'miniTurbo');
        return features;
    }    
    
    
    /**
     * get total points of speed or handling ground, water, air, or antiGravity
     * @param kart 
     * @param pathName could be either speed or handling
     * @param itemName could be either ground, water, air, or antiGravity
     */
    pathItem(kart: Kart, pathName: string, itemName: string): number {
        let total: number = 0;
        total += kart.driver [pathName][itemName];
        total += kart.body   [pathName][itemName];
        total += kart.tires  [pathName][itemName];
        total += kart.glider [pathName][itemName];
        return total;
    }
    
    
    /**
     * get total points of a feature but speed and handling
     * @param kart 
     * @param feature could be either speed or handling
     */
    feature(kart: Kart, feature: string): number {
        let total: number = 0;
        total += kart.driver [feature];
        total += kart.body   [feature];
        total += kart.tires  [feature];
        total += kart.glider [feature];
        return total;
    }

}
