import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartModule } from 'primeng/chart';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ChartModule
    ],

    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        ChartModule
    ],
})


export class PrimeNgModule { }