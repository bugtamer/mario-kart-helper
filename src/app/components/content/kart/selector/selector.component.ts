import { Component, OnInit, Input, Output } from '@angular/core';
import { StatsService } from 'src/app/services/stats/stats.service';
import { EventEmitter } from '@angular/core'; // XXX and not: from 'events';

@Component({
  selector: 'app-kart-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  @Input('type')
  private _type;
  
  @Output('newSelection')
  private _event: EventEmitter = new EventEmitter(); // EventEmitter<string> = new EventEmitter<string>();
  
  private _element: any = {}; //new Kart(new Path(0,0,0,0),0,0, new Path(0,0,0,0),0, 0);
  private _allElements: any;
  private _selectedElement: any;

  
  constructor(private _statsService: StatsService) { }

  
  ngOnInit() {
    this._statsService.getComponents( this._type ).subscribe(
      receivedComponentData => {
        this._allElements = receivedComponentData;
        this.onSelectorChange();
      });
  }

  
  onSelectorChange(): void {
    for (let i=0;   i < this._allElements.length;   i++) {
      if (this._allElements[i].name === this._selectedElement) {
        this._element = this._allElements[i];
        this._event.emit( this._element );
        break;
      }
    }
  }

}
