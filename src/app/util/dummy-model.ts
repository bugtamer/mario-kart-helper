import { KartComponentPicture } from '../models/KartComponentPicture';
import { KartFeatures } from '../models/KartFeatures';
import { KartPath } from '../models/KartPath';
import { Kart } from '../models/Kart';

export class DummyModel {
    
  public static getKart() {
    return new Kart(
        DummyModel.getKartFeatures(),
        DummyModel.getKartFeatures(),
        DummyModel.getKartFeatures(),
        DummyModel.getKartFeatures());
  }
  
    
  public static getKartFeatures() {
    return new KartFeatures(null,
        DummyModel.getKartComponentType(),
        DummyModel.getKartPath(), 0, 0,
        DummyModel.getKartPath(), 0, 0,
        DummyModel.getDriverSize(),
        DummyModel.getKartComponentPicture());
  }

  
  public static getKartComponentType() {
    return null;
  }

  
  public static getKartPath() {
    return new KartPath(0, 0, 0, 0);
  }

  
  public static getDriverSize() {
    return null;
  }

  
  public static getKartComponentPicture() {
    return new KartComponentPicture(null, 0, 0);
  }

}
