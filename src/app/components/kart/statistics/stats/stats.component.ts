import { Component, OnInit, Input } from '@angular/core';
import KartFeatures from 'src/app/models/KartFeatures';
import { AverageService } from 'src/app/services/avg/Average.service';
import { NullModel } from 'src/app/util/null-domain-models';

@Component({
  selector: 'app-kart-statistics-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input()
  element: KartFeatures = NullModel.getKartFeatures();

  constructor(private _avg: AverageService) { }

  ngOnInit() {
  }

}
