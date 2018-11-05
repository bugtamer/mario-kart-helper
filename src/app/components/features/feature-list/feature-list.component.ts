import { Component, OnInit, Input, ViewChild } from '@angular/core';
import KartFeatures from 'src/app/models/KartFeatures';
import KartComponentType from 'src/app/models/KartComponentType';
import { StatsService } from 'src/app/services/stats/stats.service';
import { AverageService } from 'src/app/services/avg/Average.service';
import { MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  
  @Input('type')
  _type: KartComponentType;

  dataSource;//: Array<KartFeatures>;// = ELEMENT_DATA;
  displayedColumns: string[] = [
    'choice',
    'totalPoints',
    'image',
    'speed',
    'speedGround',
    'speedWater',
    'speedAir',
    'speedAntiGravity',
    'acceleration',
    'weight',
    'handling',
    'handlingGround',
    'handlingWater',
    'handlingAir',
    'handlingAntiGravity',
    'grid',
    'miniTurbo'
  ];

  constructor(public snackBar: MatSnackBar, private _statsService: StatsService, private _avg: AverageService) { }

  ngOnInit() {
    this._statsService.getComponents( this._type ).subscribe(
      receivedComponentData => {
        this.dataSource = new MatTableDataSource(receivedComponentData);
        this.dataSource.sort = this.sort;
      }
    );
  }
  
}
