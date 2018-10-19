import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementComponent } from './element.component';
import { SelectorComponent } from './../../../../components/content/kart/selector/selector.component';

import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './../../../../angular-material';
import { HttpClientModule } from '@angular/common/http';


describe('ElementComponent', () => {

  let component: ElementComponent;
  let fixture: ComponentFixture<ElementComponent>;

  
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        ElementComponent,
        SelectorComponent

      ],
      imports: [
        BrowserModule,
        AngularMaterialModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
