import { Component, OnInit } from '@angular/core';
import {DeviceDetail} from '../devices';
import {iPhone} from '../devices';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.scss']
})
export class IphoneComponent implements OnInit {

  devices = iPhone;
  constructor() { }

  ngOnInit(): void {
  }

}
