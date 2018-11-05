import { Component, OnInit, Input, ViewChild } from '@angular/core';
import KartFeatures from 'src/app/models/KartFeatures';
import KartComponentType from 'src/app/models/KartComponentType';
import { StatsService } from 'src/app/services/stats/stats.service';
import { AverageService } from 'src/app/services/avg/Average.service';
import { MatSnackBar, MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { NullModel } from 'src/app/util/null-domain-models';


@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent implements OnInit {

  @ViewChild(MatSort)
  sort: MatSort;
  
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
    
  @Input('data')
  data;

  @Input()
  hasChoice: boolean;

  dataSource;
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
    // this.hasChoice = this.hasChoice;
    this.data = this.data || [ NullModel.getKartFeatures() ];
    console.log(this.data[0].type, this.data);
    this.dataSource = new MatTableDataSource<KartFeatures>(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
}
