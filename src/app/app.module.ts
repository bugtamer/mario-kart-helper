import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StatsService } from './services/stats/stats.service';
import { AppComponent } from './app.component';
import { FeatureSelectorComponent } from './components/feature-selector/feature-selector.component';
import { FeatureVtableComponent } from './components/feature-vtable/feature-vtable.component';
import { ImageComponent } from './components/image/image.component';
import { KartComponent } from './components/kart/kart.component';
import { SpecBarComponent } from './components/spec-bar/spec-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureSelectorComponent,
    FeatureVtableComponent,
    ImageComponent,
    KartComponent,
    SpecBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    StatsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
