import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../../services/stats/stats.service';
import { ComponentType } from '../../../models/ComponentType';

@Component({
  selector: 'app-tires',
  templateUrl: './tires.component.html',
  styleUrls: ['./tires.component.css']
})
export class TiresComponent implements OnInit {

  private _tires: any;
  
  constructor(private _statsService: StatsService) { }

  ngOnInit() {
    this._statsService.getComponents(ComponentType.Tires)
    .subscribe(receivedComponentData => this._tires = receivedComponentData);
  }

}
