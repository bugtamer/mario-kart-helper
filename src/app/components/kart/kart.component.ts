import { Component, AfterContentChecked } from '@angular/core';
import {ChangeDetectorRef } from '@angular/core';

import { Feature } from 'src/app/models/kart/features/feature.model';
import { Kart } from 'src/app/models/kart/kart.model';
import { Type } from 'src/app/models/kart/features/type.model';

@Component({
  selector: 'mkh-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements AfterContentChecked {

  kart : Kart;

  constructor(private cdref: ChangeDetectorRef) {
    this.kart = new Kart();
  }

  get driver() : Feature { return this.kart.driver; }
  get body()   : Feature { return this.kart.body;   }
  get tires()  : Feature { return this.kart.tires;  }
  get glider() : Feature { return this.kart.glider; }

  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }

  update(feature : Feature) : void {
    switch (feature.type) {
      case Type.Driver: this.kart.driver = feature; break;
      case Type.Body:   this.kart.body   = feature; break;
      case Type.Tires:  this.kart.tires  = feature; break;
      case Type.Glider: this.kart.glider = feature; break;
      default:
        throw 'Unknown feature type: ${feature.type}';
    }
  }

}
