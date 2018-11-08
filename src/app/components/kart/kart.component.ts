import { Component, OnInit, Input } from '@angular/core';
import Kart from 'src/app/models/Kart';
import { MatTableParserService } from 'src/app/services/model-adapters/model-adapters.service';
import { NullModel } from 'src/app/util/null-domain-models';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements OnInit {

  @Input('kart')
  kart: Kart = NullModel.getKart();

  constructor(private _parser: MatTableParserService) { }

  ngOnInit() {
  }

}
