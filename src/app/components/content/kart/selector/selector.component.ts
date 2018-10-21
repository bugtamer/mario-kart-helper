import { Component, OnInit, Input, Output } from '@angular/core';
import { StatsService } from 'src/app/services/stats/stats.service';
import { EventEmitter } from '@angular/core'; // XXX and not: from 'events';
import KartComponentType from 'src/app/models/KartComponentType';
import KartFeatures from 'src/app/models/KartFeatures';
import { NullModel } from 'src/app/util/null-domain-models';
import { Random } from 'src/app/util/random';

@Component({
  selector: 'app-kart-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  @Input('type')
  private _type: KartComponentType;
  
  @Output('newSelection')
  private _event: EventEmitter<KartFeatures> = new EventEmitter<KartFeatures>();
  
  private _element: KartFeatures = NullModel.getKartFeatures();
  private _allElements: KartFeatures[];
  private _selectedElement: string;

  
  constructor(private _statsService: StatsService) { }

  
  ngOnInit() {
    this._statsService.getComponents( this._type ).subscribe(
      receivedComponentData => {
        this._allElements = receivedComponentData;
        this._selectedElement = this._allElements[Random.getInteger(this._allElements.length)].name;
        this.onSelectorChange();
      });
  }

  
  onSelectorChange(event?: Event): void {
    for (let i=0;   i < this._allElements.length;   i++) {
      if (this._allElements[i].name === this._selectedElement) {
          this._element = this._allElements[i];
        this._event.emit( this._element );
        break;
      }
    }
  }

}
