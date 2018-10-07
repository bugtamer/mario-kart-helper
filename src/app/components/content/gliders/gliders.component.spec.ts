import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlidersComponent } from './gliders.component';

describe('GlidersComponent', () => {
  let component: GlidersComponent;
  let fixture: ComponentFixture<GlidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
