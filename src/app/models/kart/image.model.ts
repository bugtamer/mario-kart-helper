import { Deserializable } from 'src/app/models/util/deserializable.model';

/**
 * Image representation of a feature.
 */
export class Image implements Deserializable {

  public fk     : number = 0; // feature Foreign Key
  public name   : string = 'N/A';
  public url    : string = '#';
  public width  : number = 0;
  public height : number = 0;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

}
