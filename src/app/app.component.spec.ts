import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { routingProvider } from './routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SimpleComponent } from 'src/app/components/kart-builders/simple/simple.component';
import { AdvancedComponent } from 'src/app/components/kart-builders/advanced/advanced.component';
import { SliderComponent } from 'src/app/components/kart/statistics/slider/slider.component';
import { StatsComponent } from 'src/app/components/kart/statistics/stats/stats.component';
import { SelectorComponent } from 'src/app/components/kart/selector/selector.component';
import { ElementComponent } from 'src/app/components/kart/element/element.component';
import { PathComponent } from 'src/app/components/kart/statistics/path/path.component';
import { TabularComponent } from 'src/app/components/kart/statistics/tabular/tabular.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { MenuComponent } from 'src/app/components/header/menu/menu.component';
import { FeatureListComponent } from 'src/app/components/features/feature-list/feature-list.component';
import { KartComponent } from 'src/app/components/kart/kart.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        SimpleComponent,
        AdvancedComponent,
        SliderComponent,
        StatsComponent,
        SelectorComponent,
        ElementComponent,
        PathComponent,
        TabularComponent,
        PageNotFoundComponent,
        MenuComponent,
        FeatureListComponent,
        KartComponent
      ],
      imports: [
        BrowserModule,
        AngularMaterialModule,
        HttpClientModule,
        routingProvider
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
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
