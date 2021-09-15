import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchInput: string;
//  isDeviceDetails: boolean = true;


  constructor(
    private searchService: SearchService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCancelSubmit() {
    this.searchInput = '';
    this.searchService.searchDevices(this.searchInput);
  }

  get isDeviceDetails(): boolean {
    return (this.router.url.indexOf('/devices/') > -1);
  }

  onSearchKeyUp(): void {
    this.searchService.searchDevices(this.searchInput);
  }

}
