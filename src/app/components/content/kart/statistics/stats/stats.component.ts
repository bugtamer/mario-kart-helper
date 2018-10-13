import { Component, OnInit, Input } from '@angular/core';
import KartFeatures from 'src/app/models/KartFeatures';

@Component({
  selector: 'app-kart-statistics-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input()
  element: KartFeatures;

  constructor() { }

  ngOnInit() {
  }

}
