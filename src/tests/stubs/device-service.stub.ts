import { DeviceDetails } from './../../app/core/models/device-details';
import { DeviceStatus } from 'src/app/core/enums/device-status.enum';
import { Observable, of } from "rxjs";
import { Device } from "src/app/core/models/device";
import { DeviceService } from "src/app/core/services/device.service";
import { DeviceType } from 'src/app/core/enums/device-type.enum';

let devices: Device[] = [{
  id: 1,
  name: 'Device 1',
  status: DeviceStatus.AVAILABLE,
  type: DeviceType.PHONE,
},
{
  name: 'Device 2',
  status: DeviceStatus.OFFLINE,
  id: 2,
  type: DeviceType.TABLET,
},
{
  name: 'Device 3',
  status: DeviceStatus.AVAILABLE,
  id: 2,
  type: DeviceType.TV,
},
{
  name: 'Device 4',
  status: DeviceStatus.AVAILABLE,
  id: 4,
  type: DeviceType.PHONE,
},]

export const deviceServiceStub: Partial<DeviceService> = {
  getDevices: () => {
    return of(devices);
  },
  getDevice: () => {
    return new Observable<DeviceDetails>((ob) => {
      ob.next();
      ob.complete();
    });
  }
};
