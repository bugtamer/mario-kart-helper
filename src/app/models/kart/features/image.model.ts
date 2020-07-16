import { Deserializable } from '../../deserializable.model';

/**
 * Image representation of a feature.
 */
export class Image implements Deserializable {

  public url    : string = '#';
  public width  : number = 0;
  public height : number = 0;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

}
