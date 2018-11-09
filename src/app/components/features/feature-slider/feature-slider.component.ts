import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-slider',
  templateUrl: './feature-slider.component.html',
  styleUrls: ['./feature-slider.component.css']
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
