import { SizePipe } from './size.pipe';
import KartFeatures from 'src/app/models/KartFeatures';
import { DRIVERS } from 'src/app/services/stats/data/drivers';
import DriverSize from 'src/app/models/DriverSize';


describe('SizePipe', () => {

  const pipe = new SizePipe();
  const drivers: Array<KartFeatures> = DRIVERS;
  let sut: Array<KartFeatures>;

  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });


  it('only small drivers', () => {
    sut = pipe.transform(drivers, [DriverSize.Small]);
    for (let i=0; i < sut.length; i++)
      expect( sut[i].size ).toEqual( DriverSize.Small );
  });


  it('no small drivers', () => {
    sut = pipe.transform(drivers, [DriverSize.Medium, DriverSize.Large]);
    for (let i=0; i < sut.length; i++)
      expect( sut[i].size ).not.toEqual( DriverSize.Small );
  });

});
