import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { MapModule } from './map/map.module';
import { LineupComponent} from './lineup/lineup.component';
import { DndModule } from 'ng2-dnd';
import { MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LineupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot(),
    MatToolbarModule,
    MatIconModule,
    YoutubePlayerModule,
    MapModule,
    DndModule.forRoot(),
    MatListModule
  ],
  exports: [
    LineupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

