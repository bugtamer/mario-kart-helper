import { Injectable } from '@angular/core';
import { Kart } from '../../models/Kart';
import { KartPath } from '../../models/KartPath';
import { Decimals } from 'src/app/util/Decimals';


@Injectable({
    providedIn: 'root'  })
export class PointsService {
    
    path(path: KartPath): number {
        return path.ground + path.water + path.air + path.antiGravity;
    }


    speed(kart: Kart): number {
        let points: number = 0;
        points += this.speedGround(kart);
        points += this.speedWater(kart);
        points += this.speedAir(kart);
        points += this.speedAntiGravity(kart);
        points /= NUMBER_OF_PATH_TYPES;
        return Decimals.remove(points);
    }


    speedGround(kart: Kart): number {
        return pathType(kart, 'speed', 'ground');
    }


    speedWater(kart: Kart): number {
        return pathType(kart, 'speed', 'water');
    }

    
    speedAir(kart: Kart): number {
        return pathType(kart, 'speed', 'air');
    }

    
    speedAntiGravity(kart: Kart): number {
        return pathType(kart, 'speed', 'antiGravity');
    }


    acceleration(kart: Kart): number {
        return feature(kart, 'acceleration');
    }

    
    weight(kart: Kart): number {
        return feature(kart, 'weight');
    }

    
    handling(kart: Kart): number {
        let points: number = 0;
        points += this.handlingGround(kart);
        points += this.handlingWater(kart);
        points += this.handlingAir(kart);
        points += this.handlingAntiGravity(kart);
        points /= NUMBER_OF_PATH_TYPES;
        return Decimals.remove(points);
    }

    
    handlingGround(kart: Kart): number {
        return pathType(kart, 'handling', 'ground');
    }

    
    handlingWater(kart: Kart): number {
        return pathType(kart, 'handling', 'water');
    }

    
    handlingAir(kart: Kart): number {
        return pathType(kart, 'handling', 'air');
    }

    
    handlingAntiGravity(kart: Kart): number {
        return pathType(kart, 'handling', 'antiGravity');
    }
    
    
    grid(kart: Kart): number {
        return feature(kart, 'grid');
    }

    
    miniTurbo(kart: Kart): number {
        return feature(kart, 'miniTurbo');
    }

}



// LOWER ABSTRACTION LEVEL OR IMPLEMENTATION DETAILS

const NUMBER_OF_PATH_TYPES: number = 4;


function pathType(kart: Kart, speed_or_handling: string, pathType: string): number {
    let points: number = 0;
    points += kart.driver [speed_or_handling][pathType];
    points += kart.body   [speed_or_handling][pathType];
    points += kart.tires  [speed_or_handling][pathType];
    points += kart.glider [speed_or_handling][pathType];
    return points;
}


function feature(kart: Kart, feature: string): number {
    let points: number = 0;
    points += kart.driver [feature];
    points += kart.body   [feature];
    points += kart.tires  [feature];
    points += kart.glider [feature];
    return points;
}
