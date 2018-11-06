import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material';
import { HttpClientModule } from '@angular/common/http';

import { routingProvider } from 'src/app/routing';

import { StatsService } from 'src/app/services/stats/stats.service';
import { PointsService } from 'src/app/services/points/Points.service';
import { AverageService } from 'src/app/services/avg/Average.service';
import { ParseFeatureService } from 'src/app/services/model-adapters/model-adapters.service';

import { SizePipe } from 'src/app/pipes/size/size.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SimpleComponent } from 'src/app/components/kart-builders/simple/simple.component';
import { SliderComponent } from 'src/app/components/kart/statistics/slider/slider.component';
import { StatsComponent } from 'src/app/components/kart/statistics/stats/stats.component';
import { SelectorComponent } from 'src/app/components/kart/selector/selector.component';
import { ElementComponent } from 'src/app/components/kart/element/element.component';
import { PathComponent } from 'src/app/components/kart/statistics/path/path.component';
import { TabularComponent } from 'src/app/components/kart/statistics/tabular/tabular.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { AdvancedComponent } from './components/kart-builders/advanced/advanced.component';
import { FeatureListComponent } from './components/features/feature-list/feature-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimpleComponent,
    SliderComponent,
    StatsComponent,
    SelectorComponent,
    ElementComponent,
    PathComponent,
    TabularComponent,
    SizePipe,
    PageNotFoundComponent,
    MenuComponent,
    AdvancedComponent,
    FeatureListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule,
    routingProvider
  ],
  providers: [
    StatsService,
    AverageService,
    PointsService,
    ParseFeatureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
