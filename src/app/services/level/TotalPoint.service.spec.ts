import { TestBed } from '@angular/core/testing';

import { TotalPointService } from './TotalPoint.service';
import { NullModel } from '../../util/null-domain-models';
import { PathStub, KartStub, TotalPointStub } from '../../util/TestStub';
import { KartFeatures } from '../../models/KartFeatures';


describe('TotalPointService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  
  it('should be created', () => {
    const service: TotalPointService = TestBed.get(TotalPointService);
    expect(service).toBeTruthy();
  });


  it('.path(empty_path) should return 0', () => {
    const service: TotalPointService = TestBed.get(TotalPointService);
    const points: number = service.path( NullModel.getKartPath() );
    expect(points).toEqual(0);
  });


  it('.path(PathStub) should return TotalPointStub.path', () => {
    const service: TotalPointService = TestBed.get(TotalPointService);
    const points: number = service.path( new PathStub() );
    expect( points ).toEqual( TotalPointStub.path );
  });


  it('.feature(empty_Kart, \'acceleration\') should return 0', () => {
    const service: TotalPointService = TestBed.get(TotalPointService);
    const points: number = service.feature(NullModel.getKart(), 'acceleration');
    expect(points).toEqual(0);
  });


  it('.feature(KartStub, \'acceleration\') should return TotalPointStub.kartAcceleration', () => {
    const service: TotalPointService = TestBed.get(TotalPointService);
    const points: number = service.feature(new KartStub(), 'acceleration');
    expect( points ).toEqual( TotalPointStub.kartAcceleration );
  });


  it('.pathItem(empty_Kart, \'speed\', \'ground\') should return 0', () => {
    const service: TotalPointService = TestBed.get(TotalPointService);
    const points: number = service.pathItem(NullModel.getKart(), 'speed', 'ground');
    expect( points ).toEqual( 0 );
  });


  it('.pathItem(KartStub, \'handling\', \'ground\') should return TotalPointStub.pathGround', () => {
    const service: TotalPointService = TestBed.get(TotalPointService);
    const points: number = service.pathItem(new KartStub(), 'handling', 'ground');
    expect( points ).toEqual( TotalPointStub.pathGround );
  });


  it('.kart(empty_Kart) should return empty_feature', () => {
    const service: TotalPointService = TestBed.get(TotalPointService);
    const features: KartFeatures = service.kart( NullModel.getKart() );
    expect( features.acceleration ) .toEqual( 0 );
    expect( features.weight )       .toEqual( 0 );
    expect( features.grid )         .toEqual( 0 );
    expect( features.miniTurbo )    .toEqual( 0 );

    expect( features.speed.ground )      .toEqual( 0 );
    expect( features.speed.water )       .toEqual( 0 );
    expect( features.speed.air )         .toEqual( 0 );
    expect( features.speed.antiGravity ) .toEqual( 0 );
    
    expect( features.handling.ground )      .toEqual( 0 );
    expect( features.handling.water )       .toEqual( 0 );
    expect( features.handling.air )         .toEqual( 0 );
    expect( features.handling.antiGravity ) .toEqual( 0 );
  });


  it('.kart(KartStub) should return TotalPointStub.xxx', () => {
    const service: TotalPointService = TestBed.get(TotalPointService);
    const features: KartFeatures = service.kart( new KartStub() );
    expect( features.acceleration ) .toEqual( TotalPointStub.kartAcceleration );
    expect( features.weight )       .toEqual( TotalPointStub.kartWeight );
    expect( features.grid )         .toEqual( TotalPointStub.kartGrid );
    expect( features.miniTurbo )    .toEqual( TotalPointStub.kartMiniTurbo );

    expect( features.speed.ground )      .toEqual( TotalPointStub.kartSpeed.ground );
    expect( features.speed.water )       .toEqual( TotalPointStub.kartSpeed.water );
    expect( features.speed.air )         .toEqual( TotalPointStub.kartSpeed.air );
    expect( features.speed.antiGravity ) .toEqual( TotalPointStub.kartSpeed.antiGravity );
    
    expect( features.handling.ground )      .toEqual( TotalPointStub.kartHandling.ground );
    expect( features.handling.water )       .toEqual( TotalPointStub.kartHandling.water );
    expect( features.handling.air )         .toEqual( TotalPointStub.kartHandling.air );
    expect( features.handling.antiGravity ) .toEqual( TotalPointStub.kartHandling.antiGravity );
  });

});
