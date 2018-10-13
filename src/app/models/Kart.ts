import KartFeatures from "./KartFeatures";

class Kart {

    public driver: KartFeatures;
    public body: KartFeatures;
    public tires: KartFeatures;
    public glider: KartFeatures;

    
    constructor (driver: KartFeatures, body: KartFeatures,
        tires: KartFeatures, glider: KartFeatures) {

        this.driver = driver;
        this.body = body;
        this.tires = tires;
        this.glider = glider;
    }

}

export default Kart;