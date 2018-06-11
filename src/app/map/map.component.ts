import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AgmMap, AgmMarker } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat = 42.1273;
  lng = 27.8608;

  ngOnInit() {

  }

  constructor() { }

}
