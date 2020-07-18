import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Feature } from 'src/app/models/kart/feature.model';

// Typescript v2.9+ required (or ES6/ES2015):
// to import JSONs as *.ts file, tsconfig requires to
// add `"resolveJsonModule": true,` and `"esModuleInterop": true`
// to `"compilerOptions": {...}`
import * as driverStats  from 'src/app/data/drivers.json';
import * as bodiesStats  from 'src/app/data/bodies.json';
import * as tiresStats   from 'src/app/data/tires.json';
import * as glidersStats from 'src/app/data/gliders.json';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private driverBS : BehaviorSubject<Array<Feature>> = this.getEmptyBehaviorSubject();
  private bodyBS   : BehaviorSubject<Array<Feature>> = this.getEmptyBehaviorSubject();
  private tiresBS  : BehaviorSubject<Array<Feature>> = this.getEmptyBehaviorSubject();
  private gliderBS : BehaviorSubject<Array<Feature>> = this.getEmptyBehaviorSubject();

  constructor() {
    this.driverBS .next( <Array<Feature>> driverStats  );
    this.bodyBS   .next( <Array<Feature>> bodiesStats  );
    this.tiresBS  .next( <Array<Feature>> tiresStats   );
    this.gliderBS .next( <Array<Feature>> glidersStats );
  }

  // public api

  public fetchDriver() : Observable<Array<Feature>> { return this.driverBS .asObservable(); }
  public fetchBody()   : Observable<Array<Feature>> { return this.bodyBS   .asObservable(); }
  public fetchTires()  : Observable<Array<Feature>> { return this.tiresBS  .asObservable(); }
  public fetchGlider() : Observable<Array<Feature>> { return this.gliderBS .asObservable(); }

  // lower level implementation details

  private getEmptyBehaviorSubject() : BehaviorSubject<Array<Feature>> {
    const emptyArray = [];
    return new BehaviorSubject(emptyArray);
  }

}
