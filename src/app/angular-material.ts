import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

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
        MatTabsModule,
        MatRadioModule,
        MatSnackBarModule,
        MatSortModule,
        MatPaginatorModule
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
        MatTabsModule,
        MatRadioModule,
        MatSnackBarModule,
        MatSortModule,
        MatPaginatorModule
    ],
})

export class AngularMaterialModule { }