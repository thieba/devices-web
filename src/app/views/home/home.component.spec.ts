import { DevicesFilterPipe } from './../../core/pipes/devices-filter.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceService } from 'src/app/core/services/device.service';

import { HomeComponent } from './home.component';
import { deviceServiceStub } from 'src/tests/stubs/device-service.stub';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, DevicesFilterPipe ],
      providers: [
        { provide: DeviceService, useValue: deviceServiceStub },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display devices', async () => {
    await component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('app-device-status')).length).toBe(4);
  })
});
