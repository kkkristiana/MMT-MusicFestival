import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets-info',
  templateUrl: './tickets-info.component.html',
  styleUrls: ['./tickets-info.component.css']
})
export class TicketsInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navigateToTickets() {
    window.open('http://www.eventim.bg/en/tickets/bass-sea-festival-2018-obina-carevo-plaz-barvara-1048418/performance.html', '_blank');
  }

}
