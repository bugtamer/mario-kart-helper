import { Component, OnInit, Output, EventEmitter } from '@angular/core';


export class FilterDriverSize {
  Small:  boolean = true;
  Medium: boolean = true;
  Large:  boolean = true;
}


@Component({
  selector: 'app-filter-size',
  templateUrl: './filter-size.component.html',
  styleUrls: ['./filter-size.component.css']
})
export class FilterSize implements OnInit {

  @Output('change')
  expectedSizes: EventEmitter<FilterDriverSize>;

  states: FilterDriverSize;
  

  constructor() {
    this.expectedSizes = new EventEmitter<FilterDriverSize>();
  }


  ngOnInit() {
    this.states = new FilterDriverSize();
  }


  filterChange(event) {
    this.states[event.source.id] = event.checked
    this.expectedSizes.emit( this.states );
  }

}
