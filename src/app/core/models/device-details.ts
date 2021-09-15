import { Device } from 'src/app/core/models/device';

export class DeviceDetails extends Device {
  temperature: number;
  relatedDevices: Device[];
}
