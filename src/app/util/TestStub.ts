import Kart from "../models/Kart";
import KartPath from "../models/KartPath";
import KartFeatures from "../models/KartFeatures";
import KartComponentPicture from "../models/KartComponentPicture";
import KartComponentType from "../models/KartComponentType";
import DriverSize from "../models/DriverSize";
import { Decimals } from "./Decimals";


const ACCELERATION:       number =  1;
const WEIGHT:             number =  2;
const GRID:               number =  3;
const MINI_TURBO:         number =  4;
const GROUND:             number =  1;
const WATER:              number =  2;
const AIR:                number =  3;
const ANTI_GRAVITY:       number =  4;
const NUMBER_OF_PATHS:    number =  4;
const NUMBER_OF_FEATURES: number =  4;
const OFFSET:             number =  3;
const IMAGE_WIDTH:        number = 64;
const IMAGE_HEIGHT:       number = 64;
const IMAGE_URL:          string = 'Test_Stub/image_URL.png';
const FEATURE_NAME:       string = 'Test Stub feature name';



export class KartStub extends Kart {
    constructor() {
        super(
            new FeaturesStub(),
            new FeaturesStub( KartComponentType.Body ),
            new FeaturesStub( KartComponentType.Tires ),
            new FeaturesStub( KartComponentType.Glider )
        );
    }
}



export class FeaturesStub extends KartFeatures {
    constructor(type?) {
        super(
            FEATURE_NAME,
            type || KartComponentType.Driver,
            new PathStub(),
            ACCELERATION,
            WEIGHT,
            new PathStub(),
            GRID,
            MINI_TURBO,
            DriverSize.Medium,
            new PictureStub()
        );
    }
}



export class PathStub extends KartPath {
    constructor(ground?, water?, air?, antiGravity?) {
        super(
            ground      || GROUND,
            water       || WATER,
            air         || AIR,
            antiGravity || ANTI_GRAVITY
        );
    }
}



export class PictureStub extends KartComponentPicture {
    constructor() {
        super(IMAGE_URL, IMAGE_WIDTH, IMAGE_HEIGHT);
    }
}



export class PointsStub {
    static path:         number = GROUND + WATER + AIR + ANTI_GRAVITY;
    
    static ground:       number = NUMBER_OF_PATHS * GROUND;
    static water:        number = NUMBER_OF_PATHS * WATER;
    static air:          number = NUMBER_OF_PATHS * AIR;
    static antiGravity:  number = NUMBER_OF_PATHS * ANTI_GRAVITY;

    static acceleration: number = NUMBER_OF_FEATURES * ACCELERATION;
    static weight:       number = NUMBER_OF_FEATURES * WEIGHT;
    static grid:         number = NUMBER_OF_FEATURES * GRID;
    static miniTurbo:    number = NUMBER_OF_FEATURES * MINI_TURBO;
    
    static speed:        number = PointsStub.path;
    static handling:     number = PointsStub.path;
}



export class AverageStub {
    static path:         number = Decimals.remove(PointsStub.path        / NUMBER_OF_PATHS);
    static ground:       number = Decimals.remove(PointsStub.ground      / NUMBER_OF_PATHS);
    static water:        number = Decimals.remove(PointsStub.water       / NUMBER_OF_PATHS);
    static air:          number = Decimals.remove(PointsStub.air         / NUMBER_OF_PATHS);
    static antiGravity:  number = Decimals.remove(PointsStub.antiGravity / NUMBER_OF_PATHS);

    static acceleration: number = (OFFSET + PointsStub.acceleration) / NUMBER_OF_FEATURES;
    static weight:       number = (OFFSET + PointsStub.weight      ) / NUMBER_OF_FEATURES;
    static grid:         number = (OFFSET + PointsStub.grid        ) / NUMBER_OF_FEATURES;
    static miniTurbo:    number = (OFFSET + PointsStub.miniTurbo   ) / NUMBER_OF_FEATURES;
    
    static speed:        number = (OFFSET + PointsStub.speed)    / NUMBER_OF_FEATURES;
    static handling:     number = (OFFSET + PointsStub.handling) / NUMBER_OF_FEATURES;
}
