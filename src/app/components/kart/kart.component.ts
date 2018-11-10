import { Component, OnInit, Input } from '@angular/core';
import { NullModel } from 'src/app/util/null-domain-models';
import { Kart } from 'src/app/models/Kart';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements OnInit {

  @Input('kart')
  kart: Kart;

  constructor() { }

  ngOnInit() {
    this.kart = this.kart || NullModel.getKart();
  }

}
