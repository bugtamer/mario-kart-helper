import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from '../../../angular-material';
import { HttpClientModule } from '@angular/common/http';

import { SimpleComponent } from './simple.component';
import { SelectorComponent } from '../../kart/selector/selector.component';
import { TabularComponent } from '../../kart/statistics/tabular/tabular.component';


describe('SimpleComponent', () => {

  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SimpleComponent,
        SelectorComponent,
        TabularComponent
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