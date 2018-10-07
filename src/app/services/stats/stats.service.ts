import { Injectable } from '@angular/core';
import { ComponentType } from '../../models/ComponentType';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private _componentStore: object = {};
  private _componentsObs: object = {};
  private _dataSource: object = {};


  constructor(private _httpClient: HttpClient) {
    this._dataSource[ComponentType.Driver] = 'http://www.mocky.io/v2/5bba0d9a31000085043ed9f4';
    this._dataSource[ComponentType.Body] = 'http://www.mocky.io/v2/5bba4c203100005a00148c43';
    this._dataSource[ComponentType.Tires] = 'http://www.mocky.io/v2/5bba4c523100005c00148c44';
    this._dataSource[ComponentType.Glider] = 'http://www.mocky.io/v2/5bba4c823100005b00148c45';
  }


  getComponents(componentType: ComponentType): Observable<any> {
    if (this._componentStore[componentType]) {
      this._componentsObs[componentType] = of (this._componentStore[componentType]);
    } else if (! this._componentStore[componentType]) {
      this._componentsObs[componentType] = this._httpClient
      .get<any>( this._dataSource[componentType] )
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
            this._componentStore[componentType] = data;
            window.localStorage.setItem(
              componentType,
              JSON.stringify(this._componentStore[componentType]));
          },
          error => console.log('error', error)
        )
      );
    }
    return this._componentsObs[componentType];
  }

}
