import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DeviceDetail, iPhone, mac, watch} from './devices';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor() { }

  getIPhones(): Observable<DeviceDetail[]> {
    return of(iPhone);
  }
  getMacs(): Observable<DeviceDetail[]> {
    return of(mac);
  }
  getWatches(): Observable<DeviceDetail[]> {
    return of(watch);
  }
}
