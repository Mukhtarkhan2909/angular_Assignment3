import { Component, OnInit } from '@angular/core';
import { DeviceDetail } from '../../services/devices';
import { DevicesService } from '../../services/devices.service';
import { BasketdevicesService } from '../../services/basketdevices.service';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.scss']
})
export class IphoneComponent implements OnInit {

  devices: DeviceDetail[] = [];

  constructor(private devicesService: DevicesService,
              private basketDevicesService: BasketdevicesService) { }

  ngOnInit(): void {
    this.getDevices();
  }

  toBasket(device: DeviceDetail): void {
    this.basketDevicesService.add(device);
  }

  getDevices(): void {
    this.devicesService.getIPhones()
      .subscribe(devices => this.devices = devices);
  }

}
