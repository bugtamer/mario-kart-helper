import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { getDisplayedColumns } from './displayedColumns';
import { ParseFeatureService, TabularFeature } from '../../../services/model-adapters/model-adapters.service';


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
  areChoosable: boolean = this.areChoosable || true;

  dataSource;
  displayedColumns: string[] = getDisplayedColumns();

  
  constructor(private _parse: ParseFeatureService) { }

  
  ngOnInit() {
    let parsedData = this.goAroundMatSortHeaderInabilityToManageSubproperties(this.data);
    this.dataSource = new MatTableDataSource<TabularFeature>(parsedData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  
  private goAroundMatSortHeaderInabilityToManageSubproperties(data) {
    return this._parse.toTabularFeatureArray(data);
  }

}
