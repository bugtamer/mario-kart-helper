import { Deserializable } from '../deserializable.model';

/**
 * Each field is a value between 0 an 10, both inclusive.
 */
export class Medium implements Deserializable {

  public ground      : number = 0;
  public water       : number = 0;
  public air         : number = 0;
  public antiGravity : number = 0;

  get level() : number {
    return this.getLevel();
  }

  getLevel() : number {
    const total = this.ground + this.water + this.air + this.antiGravity;
    return Math.trunc(total / 4);
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

}
