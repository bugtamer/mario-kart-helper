import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../../services/stats/stats.service';

@Component({
  selector: 'app-gliders',
  templateUrl: './gliders.component.html',
  styleUrls: ['./gliders.component.css']
})
export class GlidersComponent implements OnInit {

  private _gliders: any;
  
  constructor(private _statsService: StatsService) { }

  ngOnInit() {
    this._gliders = this._statsService.getGliders();
  }

}
