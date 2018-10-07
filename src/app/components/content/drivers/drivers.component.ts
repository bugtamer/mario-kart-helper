import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../../services/stats/stats.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  private _drivers: any;

  constructor(private _statsService: StatsService) { }

  ngOnInit() {
    this._drivers = this._statsService.getDrivers();
  }

}
