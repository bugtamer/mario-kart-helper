import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from '../../../angular-material';
import { HttpClientModule } from '@angular/common/http';

import { BuilderSimpleComponent } from './builder-simple.component';
import { FeatureSelectorComponent } from '../../features/feature-selector/feature-selector.component';
import { KartTabularComponent } from '../../kart/kart-tabular/kart-tabular.component';


describe('BuilderSimpleComponent', () => {

  let component: BuilderSimpleComponent;
  let fixture: ComponentFixture<BuilderSimpleComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuilderSimpleComponent,
        FeatureSelectorComponent,
        KartTabularComponent
      ],
      imports: [
        AngularMaterialModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
