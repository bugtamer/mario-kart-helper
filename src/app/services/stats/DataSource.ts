import KartComponentType from "src/app/models/KartComponentType";

class DataSource {

    private static readonly driver: string = 'http://www.mocky.io/v2/5bc11fcc320000740021abe1';
    private static readonly body: string = 'http://www.mocky.io/v2/5bc11fe8320000770021abe2';
    private static readonly tires: string = 'http://www.mocky.io/v2/5bc12003320000290021abe3';
    private static readonly glider: string = 'http://www.mocky.io/v2/5bc12018320000290021abe4';

    
    static getResource(type: KartComponentType)  {
        let resource: string;
        switch (type) {
            case KartComponentType.Driver:
                resource = this.driver;
                break;

            case KartComponentType.Body:
                resource = this.body;
                break;

            case KartComponentType.Tires:
                resource = this.tires;
                break;

            case KartComponentType.Glider:
                resource = this.glider;
                break;
        }
        return resource;
    }

}

export default DataSource;