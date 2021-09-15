import { DeviceDetails } from './../../core/models/device-details';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  @Input() device: DeviceDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
