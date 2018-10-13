import KartPath from "./KartPath";
import KartComponentType from "./KartComponentType";
import KartComponentPicture from "./KartComponentPicture";
import DriverSize from "./DriverSize";

export class KartFeatures {

    public name: string;
    public type: KartComponentType;
    public speed: KartPath;
    public acceleration: number;
    public weight: number;
    public handling: KartPath;
    public grid: number;
    public miniTurbo: number;
    public size: DriverSize;
    public image: KartComponentPicture;

    
    constructor (name: string, type: KartComponentType,
        speed: KartPath, acceleration: number, weight: number,
        handling: KartPath, grid: number, miniTurbo: number,
        size: DriverSize, image: KartComponentPicture) {

            this.name = name;
            this.type = type;
            this.speed = speed;
            this.acceleration = acceleration;
            this.weight = weight;
            this.handling = handling;
            this.grid = grid;
            this.miniTurbo = miniTurbo;
            this.size = size;
            this.image = image;
    }

}

export default KartFeatures;