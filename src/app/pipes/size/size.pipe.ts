import { Pipe, PipeTransform } from '@angular/core';
import DriverSize from 'src/app/models/DriverSize';
import KartFeatures from 'src/app/models/KartFeatures';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {

  transform(featureList: KartFeatures[], filter: DriverSize[]): KartFeatures[] {
    let hasMatch = (feature: KartFeatures) => ( filter.indexOf(feature.size) >= 0 );
    return filter ? featureList.filter(hasMatch) : featureList;
  }

}
