import { DeviceService } from './../../core/services/device.service';
import { DeviceDetails } from './../../core/models/device-details';
import { Component, OnInit } from '@angular/core';
import { DeviceStatus } from 'src/app/core/enums/device-status.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  device: DeviceDetails;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService
    ) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async params => {
      this.device = await this.deviceService.getDevice(params.id).toPromise();
  });
  }

}
