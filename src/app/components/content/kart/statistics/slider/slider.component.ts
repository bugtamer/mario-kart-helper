import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-kart-statistics-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  value: number;

  disabled: boolean = true;
  thumbLabel: boolean = false;
  tickInterval: number = .25;
  showTicks: boolean = false;
  autoTicks: boolean = false;
  vertical: boolean = false;
  invert: boolean = false;
  min: number = 0;
  max: number = 10;
  step: number = .25;
  
  constructor() { }

  ngOnInit() {
  }

}
