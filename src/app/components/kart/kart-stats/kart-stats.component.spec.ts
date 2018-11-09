import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from 'src/app/angular-material';

import { KartStatsComponent } from './kart-stats.component';
import { FeaturePathComponent } from 'src/app/components/features/feature-path/feature-path.component';
import { FeatureSliderComponent } from 'src/app/components/features/feature-slider/feature-slider.component';


describe('KartStatsComponent', () => {

  let component: KartStatsComponent;
  let fixture: ComponentFixture<KartStatsComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartStatsComponent, FeaturePathComponent, FeatureSliderComponent ],
      imports: [ BrowserModule, AngularMaterialModule ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(KartStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
