import { TestBed } from '@angular/core/testing';

import { PointsService } from './Points.service';
import { PointsStub, PathStub, KartStub } from '../../util/TestStub';
import { NullModel } from 'src/app/util/null-domain-models';
import { Kart } from 'src/app/models/Kart';
import { KartPath } from 'src/app/models/KartPath';


describe('TotalPointService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('.path() should return an average', () => {
    data = [
      [service.path(emptyPath), minValue],
      [service.path(pathStub),  PointsStub.path]
    ];
    assertData(data);
  });

  
  it('.eachFeature(empty_kart) should return 0', () => {
    data = [
      [service.speed(emptyKart),        minValue],
      [service.acceleration(emptyKart), minValue],
      [service.weight(emptyKart),       minValue],
      [service.handling(emptyKart),     minValue],
      [service.grid(emptyKart),         minValue],
      [service.miniTurbo(emptyKart),    minValue]
    ];
    assertData(data);
  });
  
  
  it('.eachFeature(KartStub) should return an average', () => {
    data = [
      [service.speed(kartStub),        PointsStub.speed],
      [service.acceleration(kartStub), PointsStub.acceleration],
      [service.weight(kartStub),       PointsStub.weight],
      [service.handling(kartStub),     PointsStub.handling],
      [service.grid(kartStub),         PointsStub.grid],
      [service.miniTurbo(kartStub),    PointsStub.miniTurbo]
    ];
    assertData(data);
  });

});



// LOWER ABSTRACTION LEVEL OR IMPLEMENTATION DETAILS

const minValue: number = 0;

const emptyPath: KartPath = NullModel.getKartPath();
const emptyKart: Kart     = NullModel.getKart();
const pathStub:  KartPath = new PathStub();
const kartStub:  Kart     = new KartStub();

const service: PointsService = TestBed.get(PointsService);
let data: number[][];


function assertData(data: number[][]) {
  for (let i=0; i < data.length; i++)
    expect( data[i][0] ).toEqual( data[i][1] );
}
