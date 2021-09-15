import { Device } from 'src/app/core/models/device';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-status',
  templateUrl: './device-status.component.html',
  styleUrls: ['./device-status.component.scss']
})
export class DeviceStatusComponent implements OnInit {

  @Input() device: Device
  @Input() displayInfo: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDeviceClick(): void {
    this.router.navigateByUrl(`/devices/${this.device.id}`);
  }

}
