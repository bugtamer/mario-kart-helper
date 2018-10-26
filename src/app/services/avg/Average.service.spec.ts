import { TestBed } from '@angular/core/testing';

import { AverageService } from './Average.service';
import { AverageStub, PathStub, KartStub } from '../../util/TestStub';
import { NullModel } from 'src/app/util/null-domain-models';
import { Kart } from 'src/app/models/Kart';
import { KartPath } from 'src/app/models/KartPath';


describe('AverageService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('.path() should return an average', () => {
    data = [
      [service.path(emptyPath), 0],
      [service.path(pathStub),  AverageStub.path]
    ];
    assertData(data);
  });

  
  it('.eachFeature(empty_kart) should return 0.75', () => {
    data = [
      [service.speed(emptyKart),        featureMinValue],
      [service.acceleration(emptyKart), featureMinValue],
      [service.weight(emptyKart),       featureMinValue],
      [service.handling(emptyKart),     featureMinValue],
      [service.grid(emptyKart),         featureMinValue],
      [service.miniTurbo(emptyKart),    featureMinValue]
    ];
    assertData(data);
  });
  
  
  it('.eachFeature(KartStub) should return an average', () => {
    data = [
      [service.speed(kartStub),        AverageStub.speed],
      [service.acceleration(kartStub), AverageStub.acceleration],
      [service.weight(kartStub),       AverageStub.weight],
      [service.handling(kartStub),     AverageStub.handling],
      [service.grid(kartStub),         AverageStub.grid],
      [service.miniTurbo(kartStub),    AverageStub.miniTurbo]
    ];
    assertData(data);
  });

});



// LOWER ABSTRACTION LEVEL OR IMPLEMENTATION DETAILS

const featureMinValue: number = 0.75;

const emptyPath: KartPath = NullModel.getKartPath();
const emptyKart: Kart     = NullModel.getKart();
const pathStub:  KartPath = new PathStub();
const kartStub:  Kart     = new KartStub();

let service = TestBed.get(AverageService);
let data: number[][];


function assertData(data: number[][]) {
  for (let i=0; i < data.length; i++)
    expect( data[i][0] ).toEqual( data[i][1] );
}
