import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  template: `
  <div>{{message}}</div>
`
})
export class CountdownTimerComponent implements OnInit {

  private future: Date;
  private futureString: string;
  private counter$: Observable<number>;
  private subscription: Subscription;
  private message: string;

  constructor(elm: ElementRef) {
    this.futureString = elm.nativeElement.getAttribute('inputDate');
  }

  dhms(t) {
    var days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return [
      days + ' дни',
      hours + ' часа',
      minutes + ' минути',
      seconds + ' секунди'
    ].join(' ');
  }


  ngOnInit() {
    this.future = new Date(this.futureString);
    this.counter$ = Observable.interval(1000).map((x) => {
      return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
    });

    this.subscription = this.counter$.subscribe((x) => this.message = this.dhms(x));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
