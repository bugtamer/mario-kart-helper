import { Component, Input, OnInit } from '@angular/core';
import { Feature } from 'src/app/models/kart/features/feature.model';

@Component({
  selector: 'mkh-feature-vtable',
  templateUrl: './feature-vtable.component.html',
  styleUrls: ['./feature-vtable.component.css']
})
export class FeatureVtableComponent implements OnInit {

  ngOnInit(): void {
    console.log('vtable', this.feature );
  }

  @Input()
  feature : Feature;

  readonly notAvailable = 'N/A'

}
