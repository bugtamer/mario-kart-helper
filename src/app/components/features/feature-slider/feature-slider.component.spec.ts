import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from 'src/app/angular-material';

import { FeatureSliderComponent } from './feature-slider.component';


describe('SliderComponent', () => {

  let component: FeatureSliderComponent;
  let fixture: ComponentFixture<FeatureSliderComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureSliderComponent ],
      imports: [ AngularMaterialModule ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
