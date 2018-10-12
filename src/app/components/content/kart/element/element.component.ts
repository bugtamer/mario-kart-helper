import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kart-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input()
  type;

  element: any = { };

  
  constructor() { }
  
  ngOnInit() { }


  updateElement(newElement: any): void {
    this.element = newElement;
  }
  
}
