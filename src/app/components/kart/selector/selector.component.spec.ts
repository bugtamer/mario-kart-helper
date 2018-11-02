import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from 'src/app/angular-material';
import { HttpClientModule } from '@angular/common/http';

import { StatsService } from 'src/app/services/stats/stats.service';

import { SelectorComponent } from './selector.component';


describe('SelectorComponent', () => {

  let component: SelectorComponent;
  let fixture: ComponentFixture<SelectorComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations are only for Components, Directives and Pipes
      declarations: [ SelectorComponent ],
      imports: [ AngularMaterialModule, HttpClientModule ],
      providers: [ StatsService ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
