import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../../services/stats/stats.service';

@Component({
  selector: 'app-bodies',
  templateUrl: './bodies.component.html',
  styleUrls: ['./bodies.component.css']
})
export class BodiesComponent implements OnInit {

  private _bodies: any;
  
  constructor(private _statsService: StatsService) { }

  ngOnInit() {
    this._bodies = this._statsService.getBodies();
  }

}
