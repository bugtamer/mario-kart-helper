import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureVtableComponent } from './feature-vtable.component';

describe('FeatureVtableComponent', () => {
  let component: FeatureVtableComponent;
  let fixture: ComponentFixture<FeatureVtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureVtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureVtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
