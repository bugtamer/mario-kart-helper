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
  private _selectedDriver: any;
  private _driver: any = 'Nothing yet';

  constructor(private _statsService: StatsService) { }

  ngOnInit() {
    this._selectedDriver = "Mario";
    this._statsService.getComponents(ComponentType.Driver)
    .subscribe(receivedComponentData => {this._drivers = receivedComponentData;
      this.onDriverChange();});
  }

  
  onDriverChange(): void {
    for (let i=0;   i < this._drivers.length;   i++) {
      if (this._drivers[i].name === this._selectedDriver) {
        this._driver = this._drivers[i];
        break;
      }
    }
  }

}
