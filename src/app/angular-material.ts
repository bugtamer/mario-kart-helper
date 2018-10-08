import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatGridListModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule,
        MatIconModule,
        MatCardModule,
        MatSliderModule,
        MatBadgeModule
    ],

    exports: [
        BrowserAnimationsModule,
        MatGridListModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule,
        MatIconModule,
        MatCardModule,
        MatSliderModule,
        MatBadgeModule
    ],
})

export class AngularMaterialModule { }