import { DeviceStatus } from 'src/app/core/enums/device-status.enum';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { DeviceDetails } from "../models/device-details";
import { DeviceType } from '../enums/device-type.enum';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  private devices: DeviceDetails[] = [
    {
      id: 1,
      name: 'Device 1',
      status: DeviceStatus.AVAILABLE,
      temperature: 10,
      type: DeviceType.PHONE,
      relatedDevices: [
        {
          name: 'Device 4',
          status: DeviceStatus.AVAILABLE,
          id: 4,
          type: DeviceType.PHONE
        },
        {
          name: 'Device 2',
          status: DeviceStatus.OFFLINE,
          id: 2,
          type: DeviceType.TABLET
        },
        {
          name: 'Device 3',
          status: DeviceStatus.AVAILABLE,
          id: 2,
          type: DeviceType.TV
        }
      ]
    },
    {
      name: 'Device 2',
      status: DeviceStatus.OFFLINE,
      id: 2,
      type: DeviceType.TABLET,
      temperature: 22,
      relatedDevices: [
        {
          id: 1,
          name: 'Device 1',
          status: DeviceStatus.AVAILABLE,
          type: DeviceType.PHONE,
        },
        {
          id: 4,
          name: 'Device 4',
          status: DeviceStatus.AVAILABLE,
          type: DeviceType.PHONE,
        },
      ]
    },
    {
      name: 'Device 3',
      status: DeviceStatus.AVAILABLE,
      id: 2,
      type: DeviceType.TV,
      temperature: 19,
      relatedDevices: [
        {
          id: 1,
          name: 'Device 1',
          status: DeviceStatus.AVAILABLE,
          type: DeviceType.PHONE,
        }
      ]
    },
    {
      name: 'Device 4',
      status: DeviceStatus.AVAILABLE,
      id: 4,
      type: DeviceType.PHONE,
      temperature: 13,
      relatedDevices: [
        {
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
        }
      ]
    },
  ]

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if( req.method === 'GET' && req.url === 'https://api.devices.com/devices') {
        // if (req.url.indexOf('name=') >= 0) {
        //   const searchName = req.url.replace('https://api.devices.com/devices?name=', '');
        //   const results = this.devices.filter(device => device.name.toLowerCase().includes(searchName.toLowerCase()));
        //   return of(new HttpResponse({ status: 200, body: results }));
        // }
        return of(new HttpResponse({ status: 200, body: this.devices }));
    }
    if (req.method === 'GET' && req.url.startsWith('https://api.devices.com/devices/')) {
        const id = +req.url.replace('https://api.devices.com/devices/', '');
        const device = this.devices.find(device => device.id === id);
        return of(new HttpResponse({ status: 200, body: device }));
    }
    next.handle(req);
  }
}
