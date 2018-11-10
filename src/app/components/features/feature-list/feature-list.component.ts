import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { getDisplayedColumns } from './displayedColumns';
import { MatTableParserService, TabularFeature } from '../../../services/model-adapters/model-adapters.service';
import { NullModel } from 'src/app/util/null-domain-models';
import { KartFeatures } from 'src/app/models/KartFeatures';
import { Kart } from '../../../models/Kart';
import { AverageService } from '../../../services/avg/Average.service';
import { PointsService } from '../../../services/points/Points.service';


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
  data: Array<KartFeatures>;

  @Input()
  areChoosable: boolean = this.areChoosable || true;

  @Output('newSelection')
  private _event: EventEmitter<KartFeatures> = new EventEmitter<KartFeatures>();

  dataSource;
  displayedColumns: string[] = getDisplayedColumns();
  kart: Kart;

  
  constructor(
    private _parser: MatTableParserService,
    private avg: AverageService,
    private points: PointsService
  ) { }

  
  ngOnInit() {
    this.data = this.data || [ NullModel.getKartFeatures() ];
    let parsedData = this.goAroundMatSortHeaderInabilityToManageSubproperties(this.data);
    this.dataSource = new MatTableDataSource<TabularFeature>(parsedData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.kart = NullModel.getKart();
    this.updateKart(this.data[0]);
    this.updateKart(this.data[1]);
    this.updateKart(this.data[2]);
    this.updateKart(this.data[3]);
  }

  
  private updateKart(feature: KartFeatures) {
    this.kart[feature.type.toLowerCase()] = feature;
  }

  
  private goAroundMatSortHeaderInabilityToManageSubproperties(data: Array<KartFeatures>) {
    return this._parser.parseFeatureArray(data);
  }


  onChoiceChange(event): void {
    let selectedFeatureName: string = event.value;
    for (let i=0;   i < this.data.length;   i++)
      if (this.data[i].name === selectedFeatureName) {
        this._event.emit( this.data[i] );
        this.updateKart( this.data[i] );
        break;
      }
  }

}
