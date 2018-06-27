import { Injectable } from '@angular/core';
import ProgrammeEntry from './lineup.model';

@Injectable()
export class LineupService {

  constructor() { }

  getLineups(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      resolve([
        { id: '1', name: 'EXo', hours: '19:00-20:00' },
        { id: '2', name: 'acidtrip', hours: '20:00-21:00' },
        { id: '3', name: 'targy', hours: '21:00-22:00' },
        { id: '4', name: 'Mocks', hours: '22:00-23:00' },
        { id: '5', name: 'Konspirator', hours: '23:00-24:00' },
        { id: '6', name: 'Mocks-2', hours: '22:00-23:00' },
        { id: '7', name: 'Konspirator-2', hours: '23:00-24:00' },
      ]);
    })
  }
}
