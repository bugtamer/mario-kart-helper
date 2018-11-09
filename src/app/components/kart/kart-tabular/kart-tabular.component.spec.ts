import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartTabularComponent } from './kart-tabular.component';


describe('TabularComponent', () => {

  let component: KartTabularComponent;
  let fixture: ComponentFixture<KartTabularComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartTabularComponent ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(KartTabularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
