import { Component, OnInit } from '@angular/core';
import {AdminDetail} from '../../services/adminDetails';
import {AdminService} from '../../services/admin.service';
import {DeviceDetail, iPhone} from '../../services/devices';
import {DevicesService} from '../../services/devices.service';

@Component({
  selector: 'app-manage-devices',
  templateUrl: './manage-devices.component.html',
  providers: [DevicesService],
  styleUrls: ['./manage-devices.component.scss']
})
export class ManageDevicesComponent implements OnInit {

  admin: AdminDetail = this.adminService.getAdmin();
  devices: DeviceDetail[] = iPhone;
  editDevice: DeviceDetail | undefined;

  constructor(private adminService: AdminService,
              private devicesService: DevicesService) { }

  ngOnInit(): void {
  }
  getDevices(): void {
    this.devicesService.getDevices()
      .subscribe(devices => (this.devices = devices));
  }

  add(name: string): void {
    this.editDevice = undefined;
    name = name.trim();
    if (!name) {
      return;
    }

    const newDevice: DeviceDetail = { name } as DeviceDetail;
    // @ts-ignore
    this.devicesService
      .addDevice(newDevice)
      .subscribe(devices => this.devices.push(devices));
  }

  delete(device: DeviceDetail): void {
    // @ts-ignore
    this.devices = this.devices.filter(h => h !== device);
    this.devicesService
      .deleteDevice(device.id)
      .subscribe();
  }

  // tslint:disable-next-line:typedef
  edit(device: DeviceDetail) {
    this.editDevice = device;
  }

  // tslint:disable-next-line:typedef
  search(searchTerm: string) {
    this.editDevice = undefined;
    if (searchTerm) {
      this.devicesService
        .searchDevices(searchTerm)
        .subscribe(devices => (this.devices = devices));
    }
  }

  // tslint:disable-next-line:typedef
  update() {
    if (this.editDevice) {
      this.devicesService
        .updateDevice(this.editDevice)
        .subscribe(device => {
          // @ts-ignore
          const ix = device ? this.devices.findIndex(h => h.id === device.id) : -1;
          if (ix > -1) {
            // @ts-ignore
            this.devices[ix] = device;
          }
        });
      this.editDevice = undefined;
    }
  }

}
