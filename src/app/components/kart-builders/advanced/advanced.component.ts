import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { MatRadioChange } from '@angular/material';
import KartFeatures from 'src/app/models/KartFeatures';
import { DRIVERS } from 'src/app/services/stats/data/drivers';
import { BODIES } from 'src/app/services/stats/data/bodies';
import { TIRES } from 'src/app/services/stats/data/tires';
import { GLIDERS } from 'src/app/services/stats/data/gliders';
import { NullModel } from 'src/app/util/null-domain-models';
import { log } from 'util';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {

  // @Output()
  // change: EventEmitter<MatRadioChange>;

  driverList: Array<KartFeatures> = [ NullModel.getKartFeatures() ];
  bodyList: Array<KartFeatures> = [ NullModel.getKartFeatures() ];
  tiresList: Array<KartFeatures> = [ NullModel.getKartFeatures() ];
  gliderList: Array<KartFeatures> = [ NullModel.getKartFeatures() ];
  kartFeatureList: Array<KartFeatures> = [ NullModel.getKartFeatures() ];

  
  constructor() { }

  
  ngOnInit() {
    this.driverList = DRIVERS;
    this.bodyList = BODIES;
    this.tiresList = TIRES;
    this.gliderList = GLIDERS;
    this.kartFeatureList[0] = DRIVERS[0];
    this.kartFeatureList[1] = BODIES[0];
    this.kartFeatureList[2] = TIRES[0];
    this.kartFeatureList[3] = GLIDERS[0];
  }

}
