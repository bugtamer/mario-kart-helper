import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from 'src/app/angular-material';

import { StatsComponent } from './kart-stats.component';
import { PathComponent } from 'src/app/components/features/feature-path/feature-path.component';
import { SliderComponent } from 'src/app/components/features/feature-slider/feature-slider.component';


describe('StatsComponent', () => {

  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsComponent, PathComponent, SliderComponent ],
      imports: [ BrowserModule, AngularMaterialModule ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
