import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  openFB() {
    window.open('https://www.facebook.com/events/858408017653385/', '_blank');
  }

  openTwitter() {
    window.open('https://twitter.com/hmsu?lang=en', '_blank');
  }
}
