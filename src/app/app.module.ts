import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material';
import { HttpClientModule } from '@angular/common/http';

import { routingProvider } from 'src/app/routing';

import { StatsService } from 'src/app/services/stats/stats.service';
import { PointsService } from 'src/app/services/points/Points.service';
import { AverageService } from 'src/app/services/avg/Average.service';
import { MatTableParserService } from 'src/app/services/model-adapters/model-adapters.service';

import { SizePipe } from 'src/app/pipes/size/size.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SimpleComponent } from 'src/app/components/kart-builders/simple/simple.component';
import { SliderComponent } from 'src/app/components/features/feature-slider/feature-slider.component';
import { StatsComponent } from 'src/app/components/kart/kart-stats/kart-stats.component';
import { SelectorComponent } from 'src/app/components/features/feature-selector/feature-selector.component';
import { PathComponent } from 'src/app/components/features/feature-path/feature-path.component';
import { TabularComponent } from 'src/app/components/kart/kart-tabular/kart-tabular.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { AdvancedComponent } from './components/kart-builders/advanced/advanced.component';
import { FeatureListComponent } from './components/features/feature-list/feature-list.component';
import { KartComponent } from './components/kart/kart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimpleComponent,
    SliderComponent,
    StatsComponent,
    SelectorComponent,
    PathComponent,
    TabularComponent,
    SizePipe,
    PageNotFoundComponent,
    MenuComponent,
    AdvancedComponent,
    FeatureListComponent,
    KartComponent
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
    MatTableParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
