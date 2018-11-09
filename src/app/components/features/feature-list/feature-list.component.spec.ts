import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from 'src/app/angular-material';
import { HttpClientModule } from '@angular/common/http';

import { FeatureListComponent } from './feature-list.component';
import { NullModel } from 'src/app/util/null-domain-models';

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
    component.dataSource = [ NullModel.getKartFeatures() ];
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
