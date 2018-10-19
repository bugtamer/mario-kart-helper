import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { SliderComponent } from './components/content/kart/statistics/slider/slider.component';
import { StatsComponent } from './components/content/kart/statistics/stats/stats.component';
import { SelectorComponent } from './components/content/kart/selector/selector.component';
import { ElementComponent } from './components/content/kart/element/element.component';
import { PathComponent } from './components/content/kart/statistics/path/path.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        SliderComponent,
        StatsComponent,
        SelectorComponent,
        ElementComponent,
        PathComponent
      ],
      imports: [
        BrowserModule,
        AngularMaterialModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  // it(`should have as title 'mario-kart-helper'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('mario-kart-helper');
  // }));


  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to mario-kart-helper!');
  // }));

});
