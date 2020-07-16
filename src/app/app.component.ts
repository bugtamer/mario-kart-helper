import { Component } from '@angular/core';
import { Feature } from './models/kart/features/feature.model';
import { features } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mario-kart-helper';
}
