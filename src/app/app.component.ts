import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get currentUser(): any {
    let currentUserRaw = localStorage.getItem('currentUser');

    if (currentUserRaw) {
      return JSON.parse(currentUserRaw);
    } else {
      return undefined;
    }
  }

  constructor(private router: Router) { }

  openFB() {
    window.open('https://www.facebook.com/events/858408017653385/', '_blank');
  }

  openTwitter() {
    window.open('https://twitter.com/hmsu?lang=en', '_blank');
  }

  public signOut() {
    localStorage.setItem('currentUser', "");
    this.router.navigate(['./home']);
  }
}
