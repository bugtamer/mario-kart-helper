import { Injectable } from '@angular/core';
import { Kart } from '../../models/Kart';
import { KartPath } from '../../models/KartPath';
import { KartFeatures } from 'src/app/models/KartFeatures';
import { NullModel } from 'src/app/util/null-domain-models';

@Injectable({
    providedIn: 'root'
  })
export class AverageService {
    
    /**
     * Calculate the average of a path
     * @param path
     * @returns a scalar number which should be between 0 and 10
     */
    public path(path: KartPath): number {
        return (path.ground + path.water + path.air + path.antiGravity) / 4;
    }

    
    /**
     * Calculate the average of Driver, Body, Tires and Glider features
     * @param kart
     * @returns KartFeatures
     */
    public kart(kart: Kart): KartFeatures {
        let features: KartFeatures = NullModel.getKartFeatures();
        features.speed        = this.pathOfKart (kart, 'speed');
        features.acceleration = this.feature    (kart, 'acceleration');
        features.weight       = this.feature    (kart, 'weight');
        features.handling     = this.pathOfKart (kart, 'handling');
        features.grid         = this.feature    (kart, 'grid');
        features.miniTurbo    = this.feature    (kart, 'miniTurbo');
        return features;
    }


    // LOWER ABSTRACTION LEVEL OR IMPLEMENTATION DETAILS
    
    private feature(kart: Kart, feature: string): number {
        const GLIDER_UNDER_POWER_COMPENSATION: number = 3;
        let total: number = 0;
        total += kart.driver [feature];
        total += kart.body   [feature];
        total += kart.tires  [feature];
        total += kart.glider [feature] + GLIDER_UNDER_POWER_COMPENSATION;
        return total / 4;
    }

    
    private pathOfKart(kart: Kart, feature): KartPath {
        let path: KartPath = NullModel.getKartPath();
        path.ground      = this.subPath(kart, feature, 'ground');
        path.water       = this.subPath(kart, feature, 'water');
        path.air         = this.subPath(kart, feature, 'air');
        path.antiGravity = this.subPath(kart, feature, 'antiGravity');
        return path;
    }

    
    private subPath(kart: Kart, feature: string, subPath: string): number {
        let total: number = 0;
        total += kart.driver [feature][subPath];
        total += kart.body   [feature][subPath];
        total += kart.tires  [feature][subPath];
        total += kart.glider [feature][subPath];
        return total / 4;
    }

}