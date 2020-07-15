import { Component, OnInit, Input, Output } from '@angular/core';
import { StatsService } from 'src/app/services/stats/stats.service';
import { EventEmitter } from '@angular/core'; // XXX and not: from 'events';
import KartComponentType from 'src/app/models/KartComponentType';
import KartFeatures from 'src/app/models/KartFeatures';
import { NullModel } from 'src/app/util/null-domain-models';
import { Random } from 'src/app/util/random';

@Component({
  selector: 'app-feature-selector',
  templateUrl: './feature-selector.component.html',
  styleUrls: ['./feature-selector.component.css']
})
export class FeatureSelectorComponent implements OnInit {

  @Input('type')
  private _type: KartComponentType;
  
  @Output('newSelection')
  private _event: EventEmitter<KartFeatures> = new EventEmitter<KartFeatures>();
  
  element: KartFeatures = NullModel.getKartFeatures();
  allElements: KartFeatures[];
  selectedElement: string;
  imgUrl: string = '#';
  imgName: string = '';

  
  constructor(private _statsService: StatsService) { }

  
  ngOnInit() {
    this._statsService.getComponents( this._type ).subscribe(
      receivedComponentData => {
        this.allElements = receivedComponentData;
        this.selectedElement = this.allElements[Random.getInteger(this.allElements.length)].name;
        this.onSelectorChange();
      });
  }

  
  onSelectorChange(event?: Event): void {
    for (let i=0;   i < this.allElements.length;   i++) {
      if (this.allElements[i].name === this.selectedElement) {
        this.element = this.allElements[i];
        this._event.emit( this.element );
        this.imgUrl = this.element.image.url;
        this.imgName = this.element.name;
        break;
      }
    }
  }

}
