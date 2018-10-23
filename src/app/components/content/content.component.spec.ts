import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from 'src/app/angular-material';
import { HttpClientModule } from '@angular/common/http';

import { ContentComponent } from './content.component';
import { StatsComponent } from 'src/app/components/content/kart/statistics/stats/stats.component';
import { ElementComponent } from 'src/app/components/content/kart/element/element.component';
import { PathComponent } from 'src/app/components/content/kart/statistics/path/path.component';
import { SliderComponent } from 'src/app/components/content/kart/statistics/slider/slider.component';
import { SelectorComponent } from 'src/app/components/content/kart/selector/selector.component';
import { TabularComponent } from 'src/app/components/content/kart/statistics/tabular/tabular.component';


describe('ContentComponent', () => {

  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContentComponent,
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
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
