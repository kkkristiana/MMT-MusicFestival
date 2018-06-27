import { Component, OnInit } from '@angular/core';
import ProgrammeEntry from './lineup.model';
import { LineupService } from './lineup.service';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent implements OnInit {

  isLogged: boolean;
	email: string;

  programmeEntries: ProgrammeEntry[];
  personalProgramme: ProgrammeEntry[];

  dropTableTitle = '--> Drop entries here to build personal programme <--';

  constructor(private lineupService: LineupService) { }

  async ngOnInit() {
    let currentUserRaw = localStorage.getItem('currentUser');
		if (currentUserRaw) {
			this.email = JSON.parse(currentUserRaw).email;
			this.isLogged = true;
		}

    let rawData = await this.lineupService.getLineups();
    this.programmeEntries = rawData.map((data) => {
      let newProgrammeEntrie = new ProgrammeEntry(data.id, data.name, data.hours);

      return newProgrammeEntrie;
    })
  }

  addToPersonalProgramme($event: any) {
    debugger;
    const newEntry: ProgrammeEntry = $event.dragData;
    let found = false
    // tslint:disable-next-line:forin
    for (const indx in this.programmeEntries) {
      const entry: ProgrammeEntry = this.programmeEntries[indx];
      if (entry.id === newEntry.id) {
        found = true;
        break;
      }
    }

    if (!found) {
      this.dropTableTitle = 'Your personal line-up';
      this.personalProgramme.push(new ProgrammeEntry(newEntry.id, newEntry.name, newEntry.hours, newEntry.description));
      console.log('Added');
    }
  }

}
