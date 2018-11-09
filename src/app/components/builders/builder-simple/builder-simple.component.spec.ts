import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from '../../../angular-material';
import { HttpClientModule } from '@angular/common/http';

import { SimpleComponent } from './builder-simple.component';
import { FeatureSelectorComponent } from '../../features/feature-selector/feature-selector.component';
import { KartTabularComponent } from '../../kart/kart-tabular/kart-tabular.component';


describe('SimpleComponent', () => {

  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SimpleComponent,
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
    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
