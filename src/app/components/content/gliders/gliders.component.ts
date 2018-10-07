import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../../services/stats/stats.service';
import { ComponentType } from '../../../models/ComponentType';

@Component({
  selector: 'app-gliders',
  templateUrl: './gliders.component.html',
  styleUrls: ['./gliders.component.css']
})
export class GlidersComponent implements OnInit {

  private _gliders: any;
  
  constructor(private _statsService: StatsService) { }

  ngOnInit() {
    this._statsService.getComponents(ComponentType.Glider)
    .subscribe(receivedComponentData => this._gliders = receivedComponentData);
  }

}
