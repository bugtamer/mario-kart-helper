import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from 'src/app/angular-material';
import { HttpClientModule } from '@angular/common/http';

import { FeatureListComponent } from 'src/app/components/features/feature-list/feature-list.component';
import { KartComponent } from './kart.component';

describe('KartComponent', () => {

  let component: KartComponent;
  let fixture: ComponentFixture<KartComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartComponent, FeatureListComponent ],
      imports: [ AngularMaterialModule, HttpClientModule ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(KartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
