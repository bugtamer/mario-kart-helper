import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { KartElementComponent } from './components/content/kart-element/kart-element.component';
import { StatsService } from './services/stats/stats.service';
import { DriversComponent } from './components/content/drivers/drivers.component';
import { BodiesComponent } from './components/content/bodies/bodies.component';
import { TiresComponent } from './components/content/tires/tires.component';
import { GlidersComponent } from './components/content/gliders/gliders.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/content/kart/statistics/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    KartElementComponent,
    DriversComponent,
    BodiesComponent,
    TiresComponent,
    GlidersComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [
    StatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
