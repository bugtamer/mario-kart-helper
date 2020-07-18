import { Component, OnChanges, Input } from '@angular/core';

import { RowDataTable } from './row-data-table.model';
import { Feature } from 'src/app/models/kart/feature.model';
import { Kart } from 'src/app/models/kart/kart.model';
import { Type } from 'src/app/models/kart/type.model';

@Component({
  selector: 'mkh-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements OnChanges {

  // interface

  @Input()
  driver : Feature;

  @Input()
  body : Feature;

  @Input()
  tires : Feature;

  @Input()
  glider : Feature;

  // internal state

  kart : Kart;
  dataTable : Array<RowDataTable>;

  // life cycle

  constructor() {
    this.kart = new Kart();
  }
  
  ngOnChanges(): void {
    this.computeDataTable();
  }

  // event handling

  update(feature : Feature) : void {
    switch (feature.type) {
      case Type.Driver: this.driver = feature; break;
      case Type.Body:   this.body   = feature; break;
      case Type.Tires:  this.tires  = feature; break;
      case Type.Glider: this.glider = feature; break;
      default:
        throw new Error(`Unknown feature type: ${feature.type}`);
    }
    this.computeDataTable();
  }

  // convenient template methods

  getProgressbarStyle(feature : RowDataTable) : string {
    const upperThreshold = 67;
    const lowerThreshold = 33;
    const isUpperRange  = (feature.rate > upperThreshold);
    const isMiddleRange = (feature.rate > lowerThreshold);
    return isUpperRange ? 'success' : isMiddleRange ? 'warning' : 'danger';
  }

  // lower level implementation details

  private computeDataTable() : void {
    this.setKart();
    this.dataTable = [
      new RowDataTable('Size',           this.kart.driver.size, 3),
      new RowDataTable('Speed',          this.kart.speed),
      new RowDataTable('► groundSpeed',  this.kart.groundSpeed),
      new RowDataTable('► water',        this.kart.airSpeed),
      new RowDataTable('► air',          this.kart.speed),
      new RowDataTable('► anti gravity', this.kart.antiGravitySpeed),
      new RowDataTable('Acceleration',   this.kart.acceleration),
      new RowDataTable('Weight',         this.kart.weight),
      new RowDataTable('Handling',       this.kart.handling),
      new RowDataTable('► groundSpeed',  this.kart.groundHandling),
      new RowDataTable('► water',        this.kart.airHandling),
      new RowDataTable('► air',          this.kart.airHandling),
      new RowDataTable('► anti gravity', this.kart.antiGravityHandling),
      new RowDataTable('Grid',           this.kart.grid),
      new RowDataTable('Mini turbo',     this.kart.miniTurbo),
    ];
  }

  private setKart() : void {
    this.kart.driver = this.driver;
    this.kart.body   = this.body;
    this.kart.tires  = this.tires;
    this.kart.glider = this.glider;
  }

}
