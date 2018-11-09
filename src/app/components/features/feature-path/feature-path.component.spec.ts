import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from 'src/app/angular-material';

import { FeaturePathComponent } from './feature-path.component';
import { FeatureSliderComponent } from 'src/app/components/features/feature-slider/feature-slider.component';


describe('PathComponent', () => {

  let component: FeaturePathComponent;
  let fixture: ComponentFixture<FeaturePathComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturePathComponent, FeatureSliderComponent ],
      imports: [ AngularMaterialModule ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
