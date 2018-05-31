import { Component } from '@angular/core';
import { MatButton } from '@angular/material';
import { MatToolbar } from '@angular/material';
import { MatIcon } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private ytEvent;

  player: YT.Player;
  private id = 'EKRGpegFG5w';

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
}
