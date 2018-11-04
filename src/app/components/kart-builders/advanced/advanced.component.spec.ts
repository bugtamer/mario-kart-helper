import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from '../../../angular-material';
import { HttpClientModule } from '@angular/common/http';

import { StatsService } from 'src/app/services/stats/stats.service';

import { AdvancedComponent } from './advanced.component';
import { FeatureListComponent } from 'src/app/components/features/feature-list/feature-list.component';


describe('AdvancedComponent', () => {

  let component: AdvancedComponent;
  let fixture: ComponentFixture<AdvancedComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedComponent, FeatureListComponent ],
      imports: [ AngularMaterialModule, HttpClientModule ],
      providers: [ StatsService ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
