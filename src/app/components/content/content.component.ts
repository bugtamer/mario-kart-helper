import { Component, OnInit } from '@angular/core';
import KartComponentType from 'src/app/models/KartComponentType';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private _driver = KartComponentType.Driver;
  private _body = KartComponentType.Body;
  private _tires = KartComponentType.Tires;
  private _glider = KartComponentType.Glider;

  
  constructor() { }

  ngOnInit() {
  }

}
