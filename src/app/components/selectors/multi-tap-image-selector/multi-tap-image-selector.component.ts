import { Component, AfterContentChecked, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Feature } from 'src/app/models/kart/feature.model';
import { Type } from 'src/app/models/kart/type.model';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mkh-multi-tap-image-selector',
  templateUrl: './multi-tap-image-selector.component.html',
  styleUrls: ['./multi-tap-image-selector.component.css'],
  providers: [NgbNavConfig],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiTapImageSelector implements AfterContentChecked {

  // internal state

  driver : Feature;
  body   : Feature;
  tires  : Feature;
  glider : Feature;
  
  // life cycle

  constructor(private config: NgbNavConfig, private cdref: ChangeDetectorRef) {
      this.initialize();
  }

  ngAfterContentChecked() : void {
    // this.cdref.detectChanges();
  }

  // event handling

  onDriverChange(feature : Feature) : void {
    this.driver     = feature;
    this.isDriverSet = true;
    this.showKartTab()
    // this.cdref.detectChanges();
  }

  onBodyChange(feature : Feature) : void {
    this.body      = feature;
    this.isBodySet = true;
    this.showKartTab()
  }

  onTiresChange(feature : Feature) : void {
    this.tires      = feature;
    this.isTiresSet = true;
    this.showKartTab()
  }

  onGliderChange(feature : Feature) : void {
    this.glider      = feature;
    this.isGliderSet = true;
    this.showKartTab()
  }

  // template data and methods

  activeTab   : number;
  isDriverSet : boolean;
  isBodySet   : boolean;
  isTiresSet  : boolean;
  isGliderSet : boolean;

  readonly labels = ['Kart', 'Driver', 'Body', 'Tires', 'Glider'];

  get isKartSet(): boolean {
    return this.isDriverSet && this.isBodySet && this.isTiresSet && this.isGliderSet;
  }

  get kartId()   : Type { return Type.Kart;   }
  get driverId() : Type { return Type.Driver; }
  get bodyId()   : Type { return Type.Body;   }
  get tiresId()  : Type { return Type.Tires;  }
  get gliderId() : Type { return Type.Glider; }

  get kartLabel()   : string { return this.labels[ Type.Kart   ]; }
  get driverLabel() : string { return this.labels[ Type.Driver ]; }
  get bodyLabel()   : string { return this.labels[ Type.Body   ]; }
  get tiresLabel()  : string { return this.labels[ Type.Tires  ]; }
  get gliderLabel() : string { return this.labels[ Type.Glider ]; }

  // lower level implementation details

  private initialize() : void {
    this.config.destroyOnHide = false;
    this.config.roles = false;
    this.activeTab = Type.Kart;
    this.isDriverSet = false;
    this.isBodySet   = false;
    this.isTiresSet  = false;
    this.isGliderSet = false;
    this.driver = new Feature();
    this.body   = new Feature();
    this.tires  = new Feature();
    this.glider = new Feature();
  }

  private showKartTab() : void {
    this.activeTab = Type.Kart;
  }

}
