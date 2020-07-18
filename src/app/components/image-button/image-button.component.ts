import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Image } from 'src/app/models/kart/image.model';

@Component({
  selector: 'mkh-image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.css']
})
export class ImageButtonComponent {

  // interface

  @Input()
  image : Image;

  @Input()
  isHighlighted : boolean;

  @Output()
  click : EventEmitter<number>;

  // life cycle

  constructor() {
    this.click = new EventEmitter<number>();
    this.isHighlighted = true;
  }

  // event handlers

  onClick(event : Event) : void {
    event.cancelBubble = true;
    this.click.emit( this.image.fk );
  }

  // template methods

  get url()    : string { return this.image.url;    }
  get width()  : number { return this.image.width;  }
  get height() : number { return this.image.height; }
  get name()   : string { return this.image.name;   }

}
