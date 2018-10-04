import Path from "./Path";
import DriverSize from "./DriverSize";

class Kart {

    public speed: Path;
    public acceleration: number;
    public weight: number;
    public handling: Path;
    public grid: number;
    public miniTurbo: number;
    public size: DriverSize;

    
    constructor (speed: Path, acceleration: number, weight: number,
        handling: Path, grid: number, miniTurbo: number) {

            this.speed = speed;
            this.acceleration = acceleration;
            this.weight = weight;
            this.handling = handling;
            this.grid = grid;
            this.miniTurbo = miniTurbo;
            this.size = null;
    }

}

export default Kart;