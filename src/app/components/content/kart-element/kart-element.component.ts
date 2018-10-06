import { Component, OnInit } from '@angular/core';
import { ComponentType } from '../../../models/ComponentType';
import Kart from '../../../models/Kart';

@Component({
  selector: 'app-kart-element',
  templateUrl: './kart-element.component.html',
  styleUrls: ['./kart-element.component.css']
})
export class KartElementComponent implements OnInit {

  private type: ComponentType;
  private components: Kart[];

  constructor(type: ComponentType) {
    this.type = type;
  }

  ngOnInit() {
  }

}
