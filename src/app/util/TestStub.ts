import Kart from "../models/Kart";
import KartPath from "../models/KartPath";
import KartFeatures from "../models/KartFeatures";
import KartComponentPicture from "../models/KartComponentPicture";
import KartComponentType from "../models/KartComponentType";
import DriverSize from "../models/DriverSize";


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



export class TotalPointStub {
    static path:             number = GROUND + WATER + AIR + ANTI_GRAVITY;
    
    static pathGround:       number = NUMBER_OF_PATHS * GROUND;
    static pathWater:        number = NUMBER_OF_PATHS * WATER;
    static pathAir:          number = NUMBER_OF_PATHS * AIR;
    static pathAntiGravity:  number = NUMBER_OF_PATHS * ANTI_GRAVITY;

    static kartAcceleration: number = NUMBER_OF_FEATURES * ACCELERATION;
    static kartWeight:       number = NUMBER_OF_FEATURES * WEIGHT;
    static kartGrid:         number = NUMBER_OF_FEATURES * GRID;
    static kartMiniTurbo:    number = NUMBER_OF_FEATURES * MINI_TURBO;
    
    static kartSpeed: KartPath = new PathStub(
        TotalPointStub.pathGround,
        TotalPointStub.pathWater,
        TotalPointStub.pathAir,
        TotalPointStub.pathAntiGravity
    );
    
    static kartHandling: KartPath = new PathStub(
        TotalPointStub.pathGround,
        TotalPointStub.pathWater,
        TotalPointStub.pathAir,
        TotalPointStub.pathAntiGravity
    );
}



export class AverageStub {
    static path:             number = TotalPointStub.path            / NUMBER_OF_PATHS;
    static pathGround:       number = TotalPointStub.pathGround      / NUMBER_OF_PATHS;
    static pathWater:        number = TotalPointStub.pathWater       / NUMBER_OF_PATHS;
    static pathAir:          number = TotalPointStub.pathAir         / NUMBER_OF_PATHS;
    static pathAntiGravity:  number = TotalPointStub.pathAntiGravity / NUMBER_OF_PATHS;

    static kartAcceleration: number = (OFFSET + TotalPointStub.kartAcceleration) / NUMBER_OF_FEATURES;
    static kartWeight:       number = (OFFSET + TotalPointStub.kartWeight      ) / NUMBER_OF_FEATURES;
    static kartGrid:         number = (OFFSET + TotalPointStub.kartGrid        ) / NUMBER_OF_FEATURES;
    static kartMiniTurbo:    number = (OFFSET + TotalPointStub.kartMiniTurbo   ) / NUMBER_OF_FEATURES;
    
    static kartSpeed: KartPath = new PathStub(
        (OFFSET + TotalPointStub.pathGround     ) / NUMBER_OF_FEATURES,
        (OFFSET + TotalPointStub.pathWater      ) / NUMBER_OF_FEATURES,
        (OFFSET + TotalPointStub.pathAir        ) / NUMBER_OF_FEATURES,
        (OFFSET + TotalPointStub.pathAntiGravity) / NUMBER_OF_FEATURES
    );
    
    static kartHandling: KartPath = new PathStub(
        (OFFSET + TotalPointStub.pathGround     ) / NUMBER_OF_FEATURES,
        (OFFSET + TotalPointStub.pathWater      ) / NUMBER_OF_FEATURES,
        (OFFSET + TotalPointStub.pathAir        ) / NUMBER_OF_FEATURES,
        (OFFSET + TotalPointStub.pathAntiGravity) / NUMBER_OF_FEATURES
    );
}
