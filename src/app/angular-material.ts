import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatGridListModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule
    ],

    exports: [
        BrowserAnimationsModule,
        MatGridListModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule
    ],
})

export class AngularMaterialModule { }