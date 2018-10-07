import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../../services/stats/stats.service';

@Component({
  selector: 'app-tires',
  templateUrl: './tires.component.html',
  styleUrls: ['./tires.component.css']
})
export class TiresComponent implements OnInit {

  private _tires: any;
  
  constructor(private _statsService: StatsService) { }

  ngOnInit() {
    this._tires = this._statsService.getTires();
  }

}
