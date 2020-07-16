import { Deserializable } from '../../deserializable.model';
import { Medium } from '../medium.model';
import { Image } from './image.model';

/**
 * Set of characteristics of a kart.
 */
export class Feature implements Deserializable {

  id           : number = 0;
  name         : string = '';
  speed        : Medium = new Medium();
  acceleration : number = 0;
  weight       : number = 0;
  handling     : Medium = new Medium();
  grid         : number = 0;
  miniTurbo    : number = 0;
  image        : Image  = new Image();
  type?        : number;
  size?        : number;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.speed    = new Medium().deserialize( input.speed    );
    this.handling = new Medium().deserialize( input.handling );
    this.image    = new Image() .deserialize( input.image    );
    return this;
  }

}
