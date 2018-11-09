import { Component, OnInit, Input } from '@angular/core';
import Kart from 'src/app/models/Kart';
import { AverageService } from 'src/app/services/avg/Average.service';
import { PointsService } from 'src/app/services/points/Points.service';
import { NullModel } from 'src/app/util/null-domain-models';

@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.css']
})
export class TabularComponent implements OnInit {

  @Input('kart')
  private kart: Kart;

  constructor(private _totalPoints: PointsService, private _avg: AverageService) { }

  ngOnInit() {
    this.kart = this.kart || NullModel.getKart();
  }

}
