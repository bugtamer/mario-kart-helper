import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridImageSelectorComponent } from './grid-image-selector.component';
import { StatsService } from 'src/app/services/stats/stats.service';

describe('GridImageSelectorComponent', () => {
  let component: GridImageSelectorComponent;
  let fixture: ComponentFixture<GridImageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridImageSelectorComponent ],
      providers: [ StatsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridImageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
