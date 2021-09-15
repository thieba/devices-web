import { DevicesFilterPipe } from './core/pipes/devices-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeviceComponent } from './views/device/device.component';
import { SearchBarComponent } from './views/search-bar/search-bar.component';
import { DeviceDetailsComponent } from './views/device-details/device-details.component';
import { DeviceStatusComponent } from './views/device-status/device-status.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from './core/interceptors/fake-backend.interceptor'


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    DeviceComponent,
    DeviceDetailsComponent,
    DeviceStatusComponent,
    HomeComponent,
    DevicesFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
