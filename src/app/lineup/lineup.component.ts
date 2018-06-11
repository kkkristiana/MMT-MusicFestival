import { Component, OnInit } from '@angular/core';
import ProgrammeEntry from './lineup.model';
import { PROGRAMME_ENTRIES } from './lineup-mock';
import { MatList, MatListItem } from '@angular/material';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent implements OnInit {

  programmeEntries: ProgrammeEntry[];

  constructor() { }

  ngOnInit() {
    this.programmeEntries = PROGRAMME_ENTRIES;
  }

}
