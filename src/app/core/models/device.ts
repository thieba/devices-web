import { DeviceStatus } from "../enums/device-status.enum";
import { DeviceType } from "../enums/device-type.enum";

export class Device {
  name: string;
  status: DeviceStatus;
  id: number;
  type: DeviceType;
}
