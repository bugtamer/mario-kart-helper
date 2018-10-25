import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { StatsService } from './services/stats/stats.service';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/content/kart/statistics/slider/slider.component';
import { StatsComponent } from './components/content/kart/statistics/stats/stats.component';
import { SelectorComponent } from './components/content/kart/selector/selector.component';
import { ElementComponent } from './components/content/kart/element/element.component';
import { AverageService } from './services/avg/average.service';
import { PathComponent } from './components/content/kart/statistics/path/path.component';
import { TabularComponent } from './components/content/kart/statistics/tabular/tabular.component';
import { TotalPointService } from './services/level/TotalPoint.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SliderComponent,
    StatsComponent,
    SelectorComponent,
    ElementComponent,
    PathComponent,
    TabularComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [
    StatsService,
    AverageService,
    TotalPointService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
