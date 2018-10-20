import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { StatsService } from './stats.service';


describe('StatsService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));


  it('should be created', () => {
    const service: StatsService = TestBed.get(StatsService);
    expect(service).toBeTruthy();
  });

});
