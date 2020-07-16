import { Feature } from './features/feature.model';
import { Image } from './features/image.model';
import { Medium } from './medium.model';

/**
 * - A Kart has four feature: diver, body, tires, and glider.
 * - Each feature has nine specs: name, size, speed, acceleration,
 *   weight, handling, grid, miniTurbo, image.
 *   However, only five are shown on screen.
 * - Size is defined by driver.
 * - Speed and handling specs have four values: ground, water, air, and anti gravity.
 */
export class Kart {

  public driver : Feature = new Feature();
  public body   : Feature = new Feature();
  public tires  : Feature = new Feature();
  public glider : Feature = new Feature();

  // getters

  get id() : number {
    return +`${this.driver.id}${this.body.id}${this.tires.id}${this.glider.id}`;
  }

  get name() : string {
    return `${this.driver.name} + ${this.body.name} + ${this.tires.name} + ${this.glider.name}`;
  }

  get speed() : number {
    const medium = this.mediumAverage(this.driver.speed, this.body.speed, this.tires.speed, this.glider.speed);
    return this.spec(medium.ground, medium.water, medium.air, medium.antiGravity);
  }

  get speedMedium() : Medium {
    return this.mediumAverage(this.driver.speed, this.body.speed, this.tires.speed, this.glider.speed);
  }

  get groundSpeed() : number {
    return this.spec(this.driver.speed.ground, this.body.speed.ground, this.tires.speed.ground, this.glider.speed.ground);
  }

  get waterSpeed() : number {
    return this.spec(this.driver.speed.water, this.body.speed.water, this.tires.speed.water, this.glider.speed.water);
  }

  get airSpeed() : number {
    return this.spec(this.driver.speed.air, this.body.speed.air, this.tires .speed.air, this.glider.speed.air);
  }

  get antiGravitySpeed() : number {
    return this.spec(this.driver.speed.antiGravity, this.body.speed.antiGravity, this.tires .speed.antiGravity, this.glider.speed.antiGravity);
  }

  get acceleration() : number {
    return this.spec(this.driver.acceleration, this.body.acceleration, this.tires .acceleration, this.glider.acceleration);
  }

  get weight() : number {
    return this.spec(this.driver.weight, this.body.weight, this.tires.weight, this.glider.weight);
  }

  get handling() : number {
    const medium = this.mediumAverage(this.driver.handling, this.body.handling, this.tires.handling, this.glider.handling);
    return this.spec(medium.ground, medium.water, medium.air, medium.antiGravity);
  }

  get handlingMedium() : Medium {
    return this.mediumAverage(this.driver.speed, this.body.speed, this.tires.speed, this.glider.speed);
  }

  get groundHandling() : number {
    return this.spec(this.driver.handling.ground, this.body.handling.ground, this.tires.handling.ground, this.glider.handling.ground);
  }

  get waterHandling() : number {
    return this.spec(this.driver.handling.water, this.body.handling.water, this.tires.handling.water, this.glider.handling.water);
  }

  get airHandling() : number {
    return this.spec(this.driver.handling.air, this.body.handling.air, this.tires .handling.air, this.glider.handling.air);
  }

  get antiGravityHandling() : number {
    return this.spec(this.driver.handling.antiGravity, this.body.handling.antiGravity, this.tires.handling.antiGravity, this.glider.handling.antiGravity);
  }

  get grid() : number {
    return this.spec(this.driver.grid, this.body.grid, this.tires .grid, this.glider.grid);
  }

  get miniTurbo() : number {
    return this.spec(this.driver.miniTurbo, this.body.miniTurbo, this.tires.miniTurbo, this.glider.miniTurbo);
  }

  get images() : Array<Image> {
    return [this.driver.image, this.body.image, this.tires.image, this.glider.image];
  }

  get size() : number {
    return this.driver.size;
  }

  // lower level implementation details

  /**
   * Compute the final value of a spec from its Driver, Body, Tires, and Glider features.
   */
  private spec(d : number, b : number, t : number, g : number) : number {
    const total = (d + b + t + g);
    const offset = 3;
    const featureNumber = 4;
    const score = (total + offset) / featureNumber;
    return +score.toFixed(2);
  }

  /**
   * Compute the average value of ground, water, air and anti-gravity mediums from its Driver, Body, Tires, and Glider featues.
   */
  private mediumAverage(d : Medium, b : Medium, t : Medium, g : Medium) : Medium {
    const average = new Medium();
    average.ground      = this.average(d.ground, b.ground, t.ground, g.ground);
    average.water       = this.average(d.water, b.water, t.water, g.water);
    average.air         = this.average(d.air, b.air, t.air, g.air);
    average.antiGravity = this.average(d.antiGravity, b.antiGravity, t.antiGravity, g.antiGravity);
    return average;
  }

  /**
   * Calculate the average value of some spec from its Driver, Body, Tires, and Glider features.
  */
  private average(d : number, b : number, t : number, g : number) : number {
    const avg = (d + b + t + g) / 4;
    return Math.trunc(avg);
  }

}