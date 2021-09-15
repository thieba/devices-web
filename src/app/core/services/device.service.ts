import { DeviceDetails } from './../models/device-details';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Device } from "../models/device";

@Injectable({
  providedIn: 'root',
})
export class DeviceService {

  constructor(private httpClient: HttpClient) {}

  getDevices(): Observable<Device[]> {
    return this.httpClient.get<Device[]>(`https://api.devices.com/devices`);
  }

  getDevice(id: number): Observable<DeviceDetails> {
    return this.httpClient.get<DeviceDetails>(`https://api.devices.com/devices/${id}`);
  }
}
