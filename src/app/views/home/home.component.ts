import { DeviceService } from '../../core/services/device.service';
import { Device } from 'src/app/core/models/device';
import { SearchService } from 'src/app/core/services/search.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  result: Device[] = [];
  searchInput: string = '';

  constructor(
    private searchService: SearchService,
    private deviceService: DeviceService,
    private cdr: ChangeDetectorRef) { }

  async ngOnInit(): Promise<void> {
    this.searchService.searchInput$.subscribe(searchInput => {
      this.searchInput = searchInput;
      this.cdr.detectChanges();
    });
    this.result = await this.deviceService.getDevices().toPromise();
  }

}
