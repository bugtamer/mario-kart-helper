import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureHtableComponent } from './feature-htable.component';

describe('FeatureHtableComponent', () => {
  let component: FeatureHtableComponent;
  let fixture: ComponentFixture<FeatureHtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureHtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureHtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
