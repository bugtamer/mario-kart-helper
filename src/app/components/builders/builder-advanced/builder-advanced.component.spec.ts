import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from '../../../angular-material';
import { HttpClientModule } from '@angular/common/http';

import { StatsService } from 'src/app/services/stats/stats.service';

import { BuilderAdvancedComponent } from './builder-advanced.component';
import { FeatureListComponent } from 'src/app/components/features/feature-list/feature-list.component';
import { KartTabularComponent } from 'src/app/components/kart/kart-tabular/kart-tabular.component';
import { KartComponent } from 'src/app/components/kart/kart.component';


describe('AdvancedComponent', () => {

  let component: BuilderAdvancedComponent;
  let fixture: ComponentFixture<BuilderAdvancedComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilderAdvancedComponent, KartComponent, FeatureListComponent, KartTabularComponent ],
      imports: [ AngularMaterialModule, HttpClientModule ],
      providers: [ StatsService ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
