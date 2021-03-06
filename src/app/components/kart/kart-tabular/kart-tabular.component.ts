import { Component, OnInit, Input } from '@angular/core';
import Kart from 'src/app/models/Kart';
import { AverageService } from 'src/app/services/avg/Average.service';
import { PointsService } from 'src/app/services/points/Points.service';
import { NullModel } from 'src/app/util/null-domain-models';

@Component({
  selector: 'app-kart-tabular',
  templateUrl: './kart-tabular.component.html',
  styleUrls: ['./kart-tabular.component.css']
})
export class KartTabularComponent implements OnInit {

  @Input('kart')
  kart: Kart;

  constructor(private _totalPoints: PointsService, private _avg: AverageService) { }

  ngOnInit() {
    this.kart = this.kart || NullModel.getKart();
  }

  get totalPoints() : AverageService {
    return this._totalPoints;
  }

  get avg() : AverageService {
    return this._avg;
  }

}
