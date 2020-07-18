import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StatsService } from './services/stats/stats.service';
import { AppComponent } from './app.component';
import { FeatureSelectorComponent } from './components/feature-selector/feature-selector.component';
import { FeatureVtableComponent } from './components/feature-vtable/feature-vtable.component';
import { ImageComponent } from './components/image/image.component';
import { KartComponent } from './components/kart/kart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FeatureSelectorComponent,
    FeatureVtableComponent,
    ImageComponent,
    KartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    StatsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
