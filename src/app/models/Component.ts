import Kart from "./Kart";
import ComponentType from "./ComponentType";
import ComponentPicture from "./ComponentPicture";
import DriverSize from "./DriverSize";

class Component {

    public name: string;
    public type: ComponentType;
    public kart: Kart;
    public image: ComponentPicture;

    
    constructor (name: string, type: ComponentType, kart: Kart,
        image: ComponentPicture, size?: DriverSize) {

        this.name = name;
        this.type = type;
        this.kart = kart;
        this.image = image;
        this.setSize(size);
    }

    
    // LOWER LEVEL OF ABSTRACTIONS AND IMPLEMENTATION DETAILS

    private setSize(size: DriverSize): void {
        this.throwExceptionWhenDriverNotDefinesSize(size);
        this.throwExceptionWhenNonDriverDefinesSize(size);
        this.kart.size = size;
    }

    private throwExceptionWhenDriverNotDefinesSize(size: DriverSize): void {
        if (this.isDriver() && !size)
            throw "A driver must hold a size value.";
    }

    private throwExceptionWhenNonDriverDefinesSize(size: DriverSize): void {
        if (!this.isDriver() && size)
            throw "A non driver should not hold a size value.";
    }

    private isDriver(): boolean {
        return (this.type === ComponentType.Driver);
    }

}

export default Component;