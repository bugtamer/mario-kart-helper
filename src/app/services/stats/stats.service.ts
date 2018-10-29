import { Injectable } from '@angular/core';
import { KartComponentType } from '../../models/KartComponentType';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import KartFeatures from 'src/app/models/KartFeatures';
import DataSource from './DataSource';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private _kartFeaturesStore: object = {};
  private _kartFeaturesObs: object = {};


  constructor(private _httpClient: HttpClient) { }


  getComponents(type: KartComponentType): Observable<KartFeatures[]> {
    if (this._kartFeaturesStore[type]) {
      this._kartFeaturesObs[type] = of (this._kartFeaturesStore[type]);
    } else if (! this._kartFeaturesStore[type]) {
      return DataSource.getData(type);
/*
      this._kartFeaturesObs[type] = this._httpClient
      .get<any>( DataSource.getResource(type) )
      // You can easily compose a bunch of pure function operators and pass them
      // as a single operator to an observable,
      // so you can write RxJS code that is much more re-usable by just piping
      // your (pure functions) operators together and easily re-use shared logic.
      // https://blog.hackages.io/rxjs-5-5-piping-all-the-things-9d469d1b3f44
      .pipe(
        // If you are using as a pipeable operator, do is known as tap!
        // https://www.learnrxjs.io/operators/utility/do.html
        tap (
          data => {
            this._kartFeaturesStore[type] = data;
            window.localStorage.setItem(
              type,
              JSON.stringify(this._kartFeaturesStore[type]));
          },
          error => console.log('error', error)
        )
      );
*/
    }
//    return this._kartFeaturesObs[type];
  }

}
