import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from 'src/app/angular-material';
import { HttpClientModule } from '@angular/common/http';

import { TabularComponent } from './tabular.component';
import { SelectorComponent } from 'src/app/components/kart/selector/selector.component';


describe('TabularComponent', () => {

  let component: TabularComponent;
  let fixture: ComponentFixture<TabularComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabularComponent, SelectorComponent ],
      imports: [ AngularMaterialModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(TabularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
