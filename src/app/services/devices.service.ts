import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DeviceDetail, iPhone, mac, watch} from './devices';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
// @ts-ignore
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  devicesUrl = 'admin/manageDevices';
  private handleError: HandleError;

  constructor(private http: HttpClient) { }

  getDevices(): Observable<DeviceDetail[]> {
    return this.http.get<DeviceDetail[]>(this.devicesUrl)
      .pipe(
        catchError(this.handleError('getDevices', []))
      );
  }

  searchDevices(term: string): Observable<DeviceDetail[]> {
    term = term.trim();
    const options = term ?
      { params: new HttpParams().set('name', term) } : {};

    return this.http.get<DeviceDetail[]>(this.devicesUrl, options)
      .pipe(
        catchError(this.handleError<DeviceDetail[]>('searchDevices', []))
      );
  }
  addDevice(device: DeviceDetail): Observable<DeviceDetail> {
    return this.http.post<DeviceDetail>(this.devicesUrl, device, httpOptions)
      .pipe(
        catchError(this.handleError('addDevice', device))
      );
  }

  deleteDevice(id: number): Observable<{}> {
    const url = `${this.devicesUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteDevice'))
      );
  }

  updateDevice(device: DeviceDetail): Observable<DeviceDetail> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'new-auth-token');

    return this.http.put<DeviceDetail>(this.devicesUrl, device, httpOptions)
      .pipe(
        catchError(this.handleError('updateDevice', device))
      );
  }

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
