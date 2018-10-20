import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, OnInit, Input, Output } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/angular-material';
import { HttpClientModule } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

import { AverageService } from 'src/app/services/avg/average.service';
import { StatsService } from 'src/app/services/stats/stats.service';

import { Random } from 'src/app/util/random';
import { NullModel } from 'src/app/util/null-domain-models';

import { SelectorComponent } from './selector.component';
import KartComponentType from 'src/app/models/KartComponentType';
import KartFeatures from 'src/app/models/KartFeatures';


describe('SelectorComponent', () => {

  let component: SelectorComponent;
  let fixture: ComponentFixture<SelectorComponent>;

  
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       Component, Input, Output,
  //       SelectorComponent,
  //       KartComponentType,
  //       KartFeatures,
  //       EventEmitter,
  //       Random,
  //       NullModel
  //     ],
  //     imports: [
  //       BrowserModule,
  //       NgModule,
  //       AngularMaterialModule,
  //       HttpClientModule
  //     ],
  //     providers: [
  //       StatsService,
  //       AverageService
  //     ]
  //   })
  //   .compileComponents();
  // }));

  
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(SelectorComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

});
