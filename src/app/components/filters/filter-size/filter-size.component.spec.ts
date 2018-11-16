import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSize } from './filter-size.component';
import { AngularMaterialModule } from 'src/app/angular-material';


describe('FilterSize', () => {

  let component: FilterSize;
  let fixture: ComponentFixture<FilterSize>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSize ],
      imports: [
        AngularMaterialModule
      ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSize);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
