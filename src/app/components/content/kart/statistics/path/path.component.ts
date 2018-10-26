import { Component, OnInit, Input } from '@angular/core';
import KartPath from 'src/app/models/KartPath';
import { AverageService } from 'src/app/services/avg/Average.service';
import { NullModel } from 'src/app/util/null-domain-models';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {

  @Input('path')
  path: KartPath;
  
  @Input('name')
  name: string;
  
  @Input('description')
  description: string;

  
  constructor(private _avg: AverageService) { }

  
  ngOnInit() {
    this.path = NullModel.getKartPath();
    // this.name = '';
    // this.description = '';
  }

}
