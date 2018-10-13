import { Injectable } from '@angular/core';
import { KartPath } from '../../models/KartPath';
import Kart from '../../models/Kart';

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