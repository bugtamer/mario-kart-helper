import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../../services/stats/stats.service';
import { ComponentType } from '../../../models/ComponentType';

@Component({
  selector: 'app-bodies',
  templateUrl: './bodies.component.html',
  styleUrls: ['./bodies.component.css']
})
export class BodiesComponent implements OnInit {

  private _bodies: any;
  
  constructor(private _statsService: StatsService) { }

  ngOnInit() {
    this._statsService.getComponents(ComponentType.Body)
    .subscribe(receivedComponentData => this._bodies = receivedComponentData);
  }

}
