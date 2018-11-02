import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from '../../../angular-material';
import { HttpClientModule } from '@angular/common/http';

import { SimpleComponent } from './simple.component';
import { StatsComponent } from '../../kart/statistics/stats/stats.component';
import { ElementComponent } from '../../kart/element/element.component';
import { PathComponent } from '../../kart/statistics/path/path.component';
import { SliderComponent } from '../../kart/statistics/slider/slider.component';
import { SelectorComponent } from '../../kart/selector/selector.component';
import { TabularComponent } from '../../kart/statistics/tabular/tabular.component';


describe('SimpleComponent', () => {

  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SimpleComponent,
        StatsComponent,
        ElementComponent,
        PathComponent,
        SliderComponent,
        SelectorComponent,
        TabularComponent
      ],
      imports: [
        BrowserModule,
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
