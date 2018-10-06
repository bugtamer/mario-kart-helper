import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartElementComponent } from './kart-element.component';

describe('KartElementComponent', () => {
  let component: KartElementComponent;
  let fixture: ComponentFixture<KartElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
