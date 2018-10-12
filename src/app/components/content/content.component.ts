import { Component, OnInit } from '@angular/core';
import ComponentType from 'src/app/models/ComponentType';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private _driver = ComponentType.Driver;
  private _body = ComponentType.Body;
  private _tires = ComponentType.Tires;
  private _glider = ComponentType.Glider;

  
  constructor() { }

  ngOnInit() {
  }

}
