import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

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
        MatBadgeModule,
        MatListModule,
        MatExpansionModule,
        MatTableModule,
        MatMenuModule,
        MatTabsModule
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
        MatBadgeModule,
        MatListModule,
        MatExpansionModule,
        MatTableModule,
        MatMenuModule,
        MatTabsModule
    ],
})

export class AngularMaterialModule { }