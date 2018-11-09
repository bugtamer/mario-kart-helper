import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from 'src/app/angular-material';
import { HttpClientModule } from '@angular/common/http';

import { StatsService } from 'src/app/services/stats/stats.service';

import { FeatureSelectorComponent } from './feature-selector.component';


describe('SelectorComponent', () => {

  let component: FeatureSelectorComponent;
  let fixture: ComponentFixture<FeatureSelectorComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations are only for Components, Directives and Pipes
      declarations: [ FeatureSelectorComponent ],
      imports: [ AngularMaterialModule, HttpClientModule ],
      providers: [ StatsService ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
