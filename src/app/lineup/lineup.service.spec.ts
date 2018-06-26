/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LineupService } from './lineup.service';

describe('LineupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LineupService]
    });
  });

  it('should ...', inject([LineupService], (service: LineupService) => {
    expect(service).toBeTruthy();
  }));
});
