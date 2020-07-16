import { Component, Input } from '@angular/core';
import { Image } from 'src/app/models/kart/features/image.model';

@Component({
  selector: 'mkh-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  @Input()
  image : Image;

  @Input()
  name : string;

}
