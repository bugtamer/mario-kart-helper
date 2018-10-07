import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../../services/stats/stats.service';
import { ComponentType } from '../../../models/ComponentType';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  private _drivers: any;

  constructor(private _statsService: StatsService) { }

  ngOnInit() {
    this._statsService.getComponents(ComponentType.Driver)
    .subscribe(receivedComponentData => this._drivers = receivedComponentData);
  }

}
