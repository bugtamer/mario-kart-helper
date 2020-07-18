import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { StatsService } from 'src/app/services/stats/stats.service';
import { Feature } from 'src/app/models/kart/feature.model';
import { FeatureWrapper } from 'src/app/models/util/feature-wrapper.model';

/**
 * This component let you choose a feature among all the available ones of the same kind.
 */
@Component({
  selector: 'mkh-feature-selector',
  templateUrl: './feature-selector.component.html',
  styleUrls: ['./feature-selector.component.css']
})
export class FeatureSelectorComponent implements OnInit, OnDestroy {

  // component interface

  @Input('type')
  dataSourceOrigin : string; // to know all allowed values, see getDataSource()

  @Input('name')
  label : string; // any arbritary text

  @Output('change')
  notifier : EventEmitter<Feature>;

  // template data

  @ViewChild('featureSelector', {static : false})
  featureSelector : ElementRef;

  readonly selectorId   : string;
  readonly selectorName : string;

  // component internal state

  featureList : Array<Feature>;

  // component life cycle

  constructor(private statsService : StatsService) {
    this.selectorId   = uuidv4();
    this.selectorName = uuidv4();
    this.notifier = new EventEmitter<Feature>();
  }

  ngOnInit(): void {
    this.fetchFeatures();
  }

  ngOnDestroy(): void {
    this.releaseResources();
  }

  // event handlers

  onSelectionChange(event : Event) : void {
    ​event.cancelBubble = true;
    const featureId : string  = this.featureSelector.nativeElement.value;
    const payload   : Feature = this.lookUp( +featureId );
    // console.log('payload', payload );
    this.notifyFeature( payload );
  }

  // lower level implementation details

  private notifyFeature(payload : Feature) : void {
    this.notifier.emit( payload );
  }

  private lookUp(targetId : number) : Feature {
    return this.featureList.find(candidate => candidate.id === targetId);
  }

  private fetchFeatures() : void {
    this.featureList  = [];
    this.subscription = this.getDataSource().pipe( map(rawJson => this.rawJsonToModel(rawJson)) ).subscribe(
      (fetchedData : any) => {
        this.featureList = fetchedData;
        this.notifyFeature( this.featureList[0] );
        console.log('rest', this.featureList[0]);
      }
    );
  }

  private rawJsonToModel(wrappedRawJson : any | FeatureWrapper) : Array<Feature> { // XXX remove 'any' data type
    const rawJsonArray : Array<Feature> = wrappedRawJson.default;
    const modelArray   : Array<Feature> = [];
    for (let rawJson of rawJsonArray) {
      const model = new Feature().deserialize(rawJson);
      modelArray.push(model);
    }
    return modelArray;
  }

  private getDataSource() : Observable<Array<Feature>> {
    switch (this.dataSourceOrigin) {
      case 'driver': return this.statsService.fetchDriver();
      case 'body':   return this.statsService.fetchBody();
      case 'tires':  return this.statsService.fetchTires();
      case 'glider': return this.statsService.fetchGlider();
      default:
        throw `Unkwon type value: ${this.dataSourceOrigin}`;
    }
  }

  private releaseResources() : void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private subscription : Subscription;

}
