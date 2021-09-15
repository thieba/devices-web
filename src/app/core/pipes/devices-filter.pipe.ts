import { Pipe, PipeTransform } from '@angular/core';
import { Device } from '../models/device';

@Pipe({ name: 'devicesFilter' })
export class DevicesFilterPipe implements PipeTransform {

  transform(items: Device[], term: string): any {
    return term ? items.filter(item => item.name.indexOf(term) !== -1) : items;
  }
}
