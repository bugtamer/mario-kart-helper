import { Component, OnInit, Input } from '@angular/core';
import Kart from 'src/app/models/Kart';
import { NullModel } from 'src/app/util/null-domain-models';
import { Htable } from './htable';

@Component({
  selector: 'app-feature-htable',
  templateUrl: './feature-htable.component.html',
  styleUrls: ['./feature-htable.component.css']
})
export class FeatureHtableComponent implements OnInit {

  @Input('kart')
  kart: Kart;
    
  dataSource;

  displayedColumns: string[] = this.parse.getDisplayedColumns();

  
  constructor(private parse: Htable) { }

  
  ngOnInit() {
    this.kart = this.kart || NullModel.getKart();
    this.dataSource = this.parse.kart(this.kart);
  }

}
