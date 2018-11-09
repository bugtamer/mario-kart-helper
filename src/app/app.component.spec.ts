import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { routingProvider } from './routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SimpleComponent } from 'src/app/components/builders/builder-simple/builder-simple.component';
import { AdvancedComponent } from 'src/app/components/builders/builder-advanced/builder-advanced.component';
import { FeatureSliderComponent } from 'src/app/components/features/feature-slider/feature-slider.component';
import { KartStatsComponent } from 'src/app/components/kart/kart-stats/kart-stats.component';
import { FeatureSelectorComponent } from 'src/app/components/features/feature-selector/feature-selector.component';
import { FeaturePathComponent } from 'src/app/components/features/feature-path/feature-path.component';
import { KartTabularComponent } from 'src/app/components/kart/kart-tabular/kart-tabular.component';
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
        FeatureSliderComponent,
        KartStatsComponent,
        FeatureSelectorComponent,
        FeaturePathComponent,
        KartTabularComponent,
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
