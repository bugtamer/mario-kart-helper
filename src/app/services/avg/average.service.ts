import { Injectable } from '@angular/core';
import { KartPath } from '../../models/KartPath';
import Kart from '../../models/Kart';
import KartFeatures from 'src/app/models/KartFeatures';
import { DummyModel } from 'src/app/util/dummy-model';

@Injectable({
    providedIn: 'root'
  })
export class AverageService {

    private readonly GLIDER_COMPENSATION: number = 3;

    
    public getPath(path: KartPath, decimals?: number): string {
        let avg: number = (path.ground + path.water + path.air + path.antiGravity) / 4;
        return this.round(avg, decimals);
    }

    
    public getSpeed(kart: Kart, decimal?: number): string {
        return this.getVector(kart, 'speed', decimal);
    }

    
    public getHandling(kart: Kart, decimal?: number): string {
        return this.getVector(kart, 'handling', decimal);
    }

    
    public getAcceleration(kart: Kart, decimal?: number): string {
        return this.getScalar(kart, 'acceleration', decimal);
    }

    
    public getWeight(kart: Kart, decimal?: number): string {
        return this.getScalar(kart, 'weight', decimal);
    }

    
    public getGrid(kart: Kart, decimal?: number): string {
        return this.getScalar(kart, 'grid', decimal);
    }

    
    public getMiniTurbo(kart: Kart, decimal?: number): string {
        return this.getScalar(kart, 'miniTurbo', decimal);
    }

    
    public getKartFeatures(kart: Kart): KartFeatures {
        let kartFeatures: KartFeatures = DummyModel.getKartFeatures();
        kartFeatures.speed = this.kartPathOfKartIs(kart, 'speed');
        kartFeatures.acceleration = +this.getAcceleration(kart, 0);
        kartFeatures.weight = +this.getWeight(kart, 0);
        kartFeatures.handling = this.kartPathOfKartIs(kart, 'handling');
        kartFeatures.grid = +this.getGrid(kart, 0);
        kartFeatures.miniTurbo = +this.getMiniTurbo(kart, 0);
        // console.log('kartFeatures', kartFeatures);
        return kartFeatures;
    }

    
    kartPathOfKartIs(kart: Kart, feature): KartPath {
        let kartPath: KartPath = DummyModel.getKartPath();
        kartPath.ground = this.getSpecificFeaturePath(kart, feature, 'ground');
        kartPath.water = this.getSpecificFeaturePath(kart, feature, 'water');
        kartPath.air = this.getSpecificFeaturePath(kart, feature, 'air');
        kartPath.antiGravity = this.getSpecificFeaturePath(kart, feature, 'antiGravity');
        // console.log('kartPath', kartPath);
        return kartPath;
    }

    
    private getSpecificFeaturePath(kart: Kart, featureType: string, pathType: string): number {
        let avg: number = 0;
        avg += kart.driver[featureType][pathType];
        avg += kart.body[featureType][pathType];
        avg += kart.tires[featureType][pathType];
        avg += kart.glider[featureType][pathType];
        return + this.round(avg / 4, 0);
    }

    
    private getScalar(kart: Kart, field: string, decimals: number): string {
        let avg: number = this.GLIDER_COMPENSATION;
        avg += kart.driver[field];
        avg += kart.body[field];
        avg += kart.tires[field];
        avg += kart.glider[field];
        avg /= 4;
        return this.round(avg, decimals);
    }

    
    private getVector(kart: Kart, field: string, decimals: number): string {
        let avg: number = this.GLIDER_COMPENSATION;
        avg += +this.getPath(kart.driver[field]);
        avg += +this.getPath(kart.body[field]);
        avg += +this.getPath(kart.tires[field]);
        avg += +this.getPath(kart.glider[field]);
        avg /= 4;
        return this.round(avg, decimals);
    }

    
    private round(numberToRound: number, decimals: number): string {
        return Number.isInteger(decimals) ?
            numberToRound.toFixed(decimals) :
            numberToRound.toString();
    }

}