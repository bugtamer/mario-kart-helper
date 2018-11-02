import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from 'src/app/angular-material';

import { StatsComponent } from './stats.component';
import { PathComponent } from 'src/app/components/kart/statistics/path/path.component';
import { SliderComponent } from 'src/app/components/kart/statistics/slider/slider.component';


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
