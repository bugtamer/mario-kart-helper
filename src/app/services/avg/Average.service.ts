import { Injectable } from '@angular/core';
import { Kart } from '../../models/Kart';
import { KartPath } from '../../models/KartPath';
import { PointsService } from '../points/Points.service';
import { Decimals } from 'src/app/util/Decimals';

/**
 * Ranges:
 * [0.75, 5.75] speed, acceleration, weight, handling, grid & miniTurbo.
 * [0, 10] path
 */
@Injectable({
    providedIn: 'root'
  })
export class AverageService {
    
    public path(path: KartPath): number {
        return Decimals.remove(TOTAL_COUNT_OF.path(path) / TOTAL_PATH_TYPES);
    }


    public speed(kart: Kart): number {
        let points: number = 0;
        points += TOTAL_COUNT_OF.speed(kart);
        points += GLIDER_UNDER_POWER_COMPENSATION;
        return points / TOTAL_KART_PARTS;
    }


    public speedGround(kart: Kart): number {
        return TOTAL_COUNT_OF.speedGround(kart) / TOTAL_PATH_TYPES;
    }


    public speedWater(kart: Kart): number {
        return TOTAL_COUNT_OF.speedWater(kart) / TOTAL_PATH_TYPES;
    }


    public speedAir(kart: Kart): number {
        return TOTAL_COUNT_OF.speedAir(kart) / TOTAL_PATH_TYPES;
    }


    public speedAntiGravity(kart: Kart): number {
        return TOTAL_COUNT_OF.speedAntiGravity(kart) / TOTAL_PATH_TYPES;
    }

    
    public acceleration(kart: Kart): number {
        let points: number = 0;
        points += TOTAL_COUNT_OF.acceleration(kart);
        points += GLIDER_UNDER_POWER_COMPENSATION;
        return points / TOTAL_KART_PARTS;
    }

    
    public weight(kart: Kart): number {
        let points: number = 0;
        points += TOTAL_COUNT_OF.weight(kart);
        points += GLIDER_UNDER_POWER_COMPENSATION;
        return points / TOTAL_KART_PARTS;
    }

    
    public handling(kart: Kart): number {
        let points: number = 0;
        points += TOTAL_COUNT_OF.handling(kart);
        points += GLIDER_UNDER_POWER_COMPENSATION;
        return points / TOTAL_KART_PARTS;
    }


    public handlingGround(kart: Kart): number {
        return TOTAL_COUNT_OF.handlingGround(kart) / TOTAL_PATH_TYPES;
    }


    public handlingWater(kart: Kart): number {
        return TOTAL_COUNT_OF.handlingWater(kart) / TOTAL_PATH_TYPES;
    }


    public handlingAir(kart: Kart): number {
        return TOTAL_COUNT_OF.handlingAir(kart) / TOTAL_PATH_TYPES;
    }


    public handlingAntiGravity(kart: Kart): number {
        return TOTAL_COUNT_OF.handlingAntiGravity(kart) / TOTAL_PATH_TYPES;
    }

    
    public grid(kart: Kart): number {
        let points: number = 0;
        points += TOTAL_COUNT_OF.grid(kart);
        points += GLIDER_UNDER_POWER_COMPENSATION;
        return points / TOTAL_KART_PARTS;
    }

    
    public miniTurbo(kart: Kart): number {
        let points: number = 0;
        points += TOTAL_COUNT_OF.miniTurbo(kart);
        points += GLIDER_UNDER_POWER_COMPENSATION;
        return points / TOTAL_KART_PARTS;
    }

}



// LOWER ABSTRACTION LEVEL OR IMPLEMENTATION DETAILS

const TOTAL_COUNT_OF: PointsService = new PointsService();
const GLIDER_UNDER_POWER_COMPENSATION: number = 3;
const TOTAL_KART_PARTS: number = 4;
const TOTAL_PATH_TYPES: number = 4;
