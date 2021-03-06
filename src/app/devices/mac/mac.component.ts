import { Component, OnInit } from '@angular/core';
import {mac} from '../devices';

@Component({
  selector: 'app-mac',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.scss']
})
export class MacComponent implements OnInit {

  devices = mac;
  constructor() { }

  ngOnInit(): void {
  }

}
