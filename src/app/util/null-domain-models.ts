import { KartComponentPicture } from '../models/KartComponentPicture';
import { KartFeatures } from '../models/KartFeatures';
import { KartPath } from '../models/KartPath';
import { Kart } from '../models/Kart';

export class NullModel {
    
  public static getKart() {
    return new Kart(
        NullModel.getKartFeatures(),
        NullModel.getKartFeatures(),
        NullModel.getKartFeatures(),
        NullModel.getKartFeatures());
  }
  
    
  public static getKartFeatures() {
    return new KartFeatures(null,
        NullModel.getKartComponentType(),
        NullModel.getKartPath(), 0, 0,
        NullModel.getKartPath(), 0, 0,
        NullModel.getDriverSize(),
        NullModel.getKartComponentPicture());
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
