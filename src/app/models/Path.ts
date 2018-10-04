class Path {

    public ground: number;
    public water: number;
    public air: number;
    public antiGravity: number;


    constructor (ground: number, water: number, air: number, antiGravity: number) {
        this.ground = ground;
        this.water = water;
        this.air = air;
        this.antiGravity = antiGravity;
    }

    
    getAverage() {
        var avg = (this.ground + this.water + this.air + this.antiGravity) / 4;
        return avg.toFixed(2);
    }

}

export default Path;