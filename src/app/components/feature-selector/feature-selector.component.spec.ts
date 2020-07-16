import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSelectorComponent } from './feature-selector.component';
import { StatsService } from 'src/app/services/stats/stats.service';

describe('FeatureSelectorComponent', () => {
  let component: FeatureSelectorComponent;
  let fixture: ComponentFixture<FeatureSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureSelectorComponent ],
      providers: [ StatsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
