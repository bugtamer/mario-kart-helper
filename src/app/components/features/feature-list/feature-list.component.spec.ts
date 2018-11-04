import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from 'src/app/angular-material';
import { HttpClientModule } from '@angular/common/http';

import { FeatureListComponent } from './feature-list.component';
import { DRIVERS } from 'src/app/services/stats/data/drivers';

describe('FeatureListComponent', () => {

  let component: FeatureListComponent;
  let fixture: ComponentFixture<FeatureListComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureListComponent ],
      imports: [ AngularMaterialModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureListComponent);
    component = fixture.componentInstance;
    component.dataSource = DRIVERS;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
