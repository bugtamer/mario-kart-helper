import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material';
import { PrimeNgModule } from './primeng.module';
import { HttpClientModule } from '@angular/common/http';

import { routingProvider } from 'src/app/routing';

import { StatsService } from 'src/app/services/stats/stats.service';
import { PointsService } from 'src/app/services/points/Points.service';
import { AverageService } from 'src/app/services/avg/Average.service';
import { MatTableParserService } from 'src/app/services/model-adapters/model-adapters.service';

import { SizePipe } from 'src/app/pipes/size/size.pipe';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { BuilderSimpleComponent } from 'src/app/components/builders/builder-simple/builder-simple.component';
import { BuilderAdvancedComponent } from './components/builders/builder-advanced/builder-advanced.component';
import { FeatureSliderComponent } from 'src/app/components/features/feature-slider/feature-slider.component';
import { FeatureSelectorComponent } from 'src/app/components/features/feature-selector/feature-selector.component';
import { FeaturePathComponent } from 'src/app/components/features/feature-path/feature-path.component';
import { FeatureListComponent } from './components/features/feature-list/feature-list.component';
import { KartStatsComponent } from 'src/app/components/kart/kart-stats/kart-stats.component';
import { KartTabularComponent } from 'src/app/components/kart/kart-tabular/kart-tabular.component';
import { KartComponent } from './components/kart/kart.component';
import { FeatureHtableComponent } from './components/features/feature-htable/feature-htable.component';
import { FilterSize } from 'src/app/components/filters/filter-size/filter-size.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuilderSimpleComponent,
    FeatureSliderComponent,
    KartStatsComponent,
    FeatureSelectorComponent,
    FeaturePathComponent,
    KartTabularComponent,
    SizePipe,
    PageNotFoundComponent,
    MenuComponent,
    BuilderAdvancedComponent,
    FeatureListComponent,
    KartComponent,
    FeatureHtableComponent,
    FilterSize
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule,
    PrimeNgModule,
    routingProvider,
    BrowserAnimationsModule
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
