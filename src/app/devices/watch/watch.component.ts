import { Component, OnInit } from '@angular/core';
import {watch} from '../devices';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  devices = watch;
  constructor() { }

  ngOnInit(): void {
  }

}
