import { Injectable } from '@angular/core';
import { DeviceDetail } from './devices';

@Injectable({
  providedIn: 'root'
})
export class BasketdevicesService {

  basketDevices: DeviceDetail[] = [];
  constructor() { }

  add(device: DeviceDetail): void {
    this.basketDevices.push(device);
  }
  clear(): void {
    this.basketDevices = [];
  }

}
