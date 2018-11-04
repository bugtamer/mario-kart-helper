import { Component, OnInit, Input } from '@angular/core';
import KartFeatures from 'src/app/models/KartFeatures';
import { DRIVERS } from 'src/app/services/stats/data/drivers';
import KartComponentType from 'src/app/models/KartComponentType';
import { StatsService } from 'src/app/services/stats/stats.service';


// const ELEMENT_DATA: KartFeatures[] = DRIVERS;


@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent implements OnInit {

  @Input('type')
  _type: KartComponentType;

  dataSource: Array<KartFeatures>;// = ELEMENT_DATA;
  displayedColumns: string[] = ['image', 'acceleration', 'weight'];
  //['image', 'speed', 'acceleration', 'weight', 'handling', 'grid', 'miniTurbo'];

  constructor(private _statsService: StatsService) { }

  ngOnInit() {
    this._statsService.getComponents( this._type ).subscribe(
      receivedComponentData => {
        this.dataSource = receivedComponentData;
      });
  }

}
