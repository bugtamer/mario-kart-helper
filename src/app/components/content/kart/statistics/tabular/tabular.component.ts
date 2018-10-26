import { Component, OnInit, Input } from '@angular/core';
import Kart from 'src/app/models/Kart';
import KartFeatures from 'src/app/models/KartFeatures';
import { NullModel } from 'src/app/util/null-domain-models';
import KartComponentType from 'src/app/models/KartComponentType';
import { AverageService } from 'src/app/services/avg/Average.service';
import { PointsService } from 'src/app/services/points/Points.service';

@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.css']
})
export class TabularComponent implements OnInit {

  @Input('kart')
  private kart: Kart;
  private _kartFeatureArray: KartFeatures[];
  kartAvgFeatures: KartFeatures;
  kartTotalPoints: KartFeatures;
  displayedColumns: string[];

  constructor(private _totalPoints: PointsService, private _avg: AverageService) { }

  ngOnInit() {
    this.kart = NullModel.getKart();
    this.displayedColumns = [ 'Driver', 'Body', 'Tires', 'Glider' ];
    this.kartTotalPoints = NullModel.getKartFeatures();
    this.kartAvgFeatures = NullModel.getKartFeatures();
    this._kartFeatureArray = [
      this.kart.driver,
      this.kart.body,
      this.kart.tires,
      this.kart.glider
    ];
  }


  updateDriver(newDriver: KartFeatures): void {
    this.updateFeature(KartComponentType.Driver, newDriver, 0);
  }


  updateBody(newBody: KartFeatures): void {
    this.updateFeature(KartComponentType.Body, newBody, 1);
  }


  updateTires(newTires: KartFeatures): void {
    this.updateFeature(KartComponentType.Tires, newTires, 2);
  }


  updateGlider(newGlider: KartFeatures): void {
    this.updateFeature(KartComponentType.Glider, newGlider, 3);
  }


  private updateFeature(feature: KartComponentType, newFeature: KartFeatures, order: number): void {
    switch(feature) {
      case KartComponentType.Driver: this.kart.driver = newFeature; break;
      case KartComponentType.Body: this.kart.body = newFeature; break;
      case KartComponentType.Tires: this.kart.tires = newFeature; break;
      case KartComponentType.Glider: this.kart.glider = newFeature; break;
    }
    //this.kart[feature.toLowerCase()] = newFeature;
    this._kartFeatureArray[order] = newFeature;
    this.setFeature(this.kartAvgFeatures, this._avg, this.kart);
    this.setFeature(this.kartTotalPoints, this._totalPoints, this.kart);
    // this.kartAvgFeatures = this._avg.kart(this.kart);
    // this.kartTotalPoints = this._totalPoints.kart( this.kart );
    console.log('Input was updated', this.kart);
  }


  setFeature(feature: KartFeatures, service, kart: Kart) {
    feature.speed.ground         = service.speedGround(kart);
    feature.speed.water          = service.speedWater(kart);
    feature.speed.air            = service.speedAir(kart);
    feature.speed.antiGravity    = service.speedAntiGravity(kart);
    feature.acceleration         = service.acceleration(kart);
    feature.weight               = service.weight(kart);
    feature.handling.ground      = service.handlingGround(kart);
    feature.handling.water       = service.handlingWater(kart);
    feature.handling.air         = service.handlingAir(kart);
    feature.handling.antiGravity = service.handlingAntiGravity(kart);
    feature.grid                 = service.grid(kart);
    feature.miniTurbo            = service.miniTurbo(kart);
  }

}
