import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StatsService } from './services/stats/stats.service';
import { AppComponent } from './app.component';
import { MultiTapImageSelector } from './components/selectors/multi-tap-image-selector/multi-tap-image-selector.component';
import { FeatureSelectorComponent } from './components/feature-selector/feature-selector.component';
import { FeatureVtableComponent } from './components/feature-vtable/feature-vtable.component';
import { ImageComponent } from './components/image/image.component';
import { ImageButtonComponent } from './components/image-button/image-button.component';
import { KartComponent } from './components/kart/kart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GridImageSelectorComponent } from './components/selectors/grid-image-selector/grid-image-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureSelectorComponent,
    FeatureVtableComponent,
    ImageComponent,
    ImageButtonComponent,
    MultiTapImageSelector,
    GridImageSelectorComponent,
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
