class KartPath {

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

}

export default KartPath;