import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import KartComponentType from 'src/app/models/KartComponentType';
import DriverSize from 'src/app/models/DriverSize';

@Component({
  selector: 'app-filter-size',
  templateUrl: './filter-size.component.html',
  styleUrls: ['./filter-size.component.css']
})
export class FilterSize implements OnInit {

  @Output()
  expectedSizes: EventEmitter<MatCheckboxChange>;

  states = { }
  

  checked = false;
  readonly indeterminate = false;
  labelPosition = 'after';
  disabled = false;


  constructor() { }


  ngOnInit() {
    this.states[DriverSize.Small] = true;
    this.states[DriverSize.Medium] = true;
    this.states[DriverSize.Large] = true;
  }


  filterChange(event) {
    console.log(this.states);
    this.states[event.source.id] = event.checked
    console.log(this.states);
  }

}
