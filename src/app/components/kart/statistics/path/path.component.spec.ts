import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from 'src/app/angular-material';

import { PathComponent } from './path.component';
import { SliderComponent } from 'src/app/components/kart/statistics/slider/slider.component';


describe('PathComponent', () => {

  let component: PathComponent;
  let fixture: ComponentFixture<PathComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathComponent, SliderComponent ],
      imports: [ AngularMaterialModule ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(PathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
