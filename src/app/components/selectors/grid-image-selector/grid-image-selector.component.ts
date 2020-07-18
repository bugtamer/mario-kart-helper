import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StatsService } from 'src/app/services/stats/stats.service';
import { Feature } from 'src/app/models/kart/feature.model';
import { FeatureWrapper } from 'src/app/models/util/feature-wrapper.model';

/**
 * This component let you choose a feature among all the available ones of the same kind.
 */
@Component({
  selector: 'mkh-grid-image-selector',
  templateUrl: './grid-image-selector.component.html',
  styleUrls: ['./grid-image-selector.component.css']
})
export class GridImageSelectorComponent implements OnInit, OnDestroy {

  // interface

  @Input('type')
  dataSource !: 'driver' | 'body' | 'tires' | 'glider';

  @Input('initialSelectedId')
  currentSelectedId : number = 0;

  @Output('change')
  notifier : EventEmitter<Feature>;

  // internal state

  featureList : Array<Feature>;

  // life cycle

  constructor(private statsService : StatsService) {
    this.notifier    = new EventEmitter<Feature>();
    this.featureList = [];
  }

  ngOnInit(): void {
    this.fetchFeatures();
  }

  ngOnDestroy(): void {
    this.releaseResources();
  }

  // template methods

  isHighlighted(feature : Feature) : boolean {
    return feature.id === this.currentSelectedId;
  }

  // event handlers

  onSelectionChange(featureId : number) : void {
    this.currentSelectedId = featureId;
    const payload = this.lookUp( this.currentSelectedId );
    this.notifyCurrentFeature( payload );
  }

  // lower level implementation details

  private notifyCurrentFeature(payload : Feature) : void {
    this.notifier.emit( payload );
  }

  private lookUp(targetId : number) : Feature {
    return this.featureList.find(candidate => candidate.id === targetId);
  }

  private fetchFeatures() : void {
    this.subscription = this.getDataSource().pipe( map(rawJson => this.parseFeatures(rawJson)) ).subscribe(
      (parsedData : Array<Feature>) => this.featureList = parsedData
    );
  }

  private parseFeatures(wrappedRawJson : any | FeatureWrapper) : Array<Feature> { // TODO data type should be 'Array<Feature>'
    const rawJsonArray : Array<Feature> = wrappedRawJson.default;
    const featureArray : Array<Feature> = [];
    for (let rawJson of rawJsonArray) {
      const feature = new Feature().deserialize(rawJson);
      featureArray.push(feature);
    }
    return featureArray;
  }

  private getDataSource() : Observable<Array<Feature>> {
    switch (this.dataSource) {
      case 'driver': return this.statsService.fetchDriver();
      case 'body':   return this.statsService.fetchBody();
      case 'tires':  return this.statsService.fetchTires();
      case 'glider': return this.statsService.fetchGlider();
      default:
        throw `Unkwon type value: ${this.dataSource}`;
    }
  }

  private releaseResources() : void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private subscription : Subscription;

}
