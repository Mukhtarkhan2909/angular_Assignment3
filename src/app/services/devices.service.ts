import { Injectable } from '@angular/core';
import {BasketdevicesService} from './basketdevices.service';
import { Observable, of } from 'rxjs';
import { DeviceDetail, iPhone, mac, watch } from './devices';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private basketDevicesService: BasketdevicesService) { }

  getIPhones(): Observable<DeviceDetail[]> {
    const p = of(iPhone);
    return p;
  }
  getMacs(): Observable<DeviceDetail[]> {
    const m = of(mac);
    return m;
  }
  getWatches(): Observable<DeviceDetail[]> {
    const w = of(watch);
    return w;
  }
}
