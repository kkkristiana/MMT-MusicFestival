/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MixContestComponent } from './mix-contest.component';

describe('MixContestComponent', () => {
  let component: MixContestComponent;
  let fixture: ComponentFixture<MixContestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixContestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
