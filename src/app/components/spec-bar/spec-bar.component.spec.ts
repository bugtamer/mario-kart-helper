import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecBarComponent } from './spec-bar.component';

describe('SpecBarComponent', () => {
  let component: SpecBarComponent;
  let fixture: ComponentFixture<SpecBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
