import { Component, OnInit, Input } from '@angular/core';
import Kart from 'src/app/models/Kart';

@Component({
  selector: 'app-kart-statistics-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input()
  element: any;

  constructor() { }

  ngOnInit() {
  }

}
