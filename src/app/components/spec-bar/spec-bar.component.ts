import { Component, Input } from '@angular/core';

@Component({
  selector: 'mkh-spec-bar',
  templateUrl: './spec-bar.component.html',
  styleUrls: ['./spec-bar.component.css']
})
export class SpecBarComponent {

  @Input()
  score : number = 0;

  @Input()
  maxScore : number = 5.75;

  get barProgress() : number {
    return this.score / this.maxScore * 100;
  }

}
