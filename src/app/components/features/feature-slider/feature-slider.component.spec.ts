import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from 'src/app/angular-material';

import { SliderComponent } from './feature-slider.component';


describe('SliderComponent', () => {

  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderComponent ],
      imports: [ AngularMaterialModule ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
