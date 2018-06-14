import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { MapModule } from './map/map.module';
import { LineupComponent} from './lineup/lineup.component';
import { DndModule } from 'ng2-dnd';
import { MatListModule } from '@angular/material';
import { ArtistsComponent} from './artists/artists.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MixContestComponent } from './mix-contest/mix-contest.component';
import { HomeComponent } from './home/home.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { TicketsInfoComponent } from './tickets-info/tickets-info.component';
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    LineupComponent,
    ArtistsComponent,
    MixContestComponent,
    HomeComponent,
    ImageGalleryComponent,
    TicketsInfoComponent,
    FileSelectDirective
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
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    Angular2ImageGalleryModule
    ],
  exports: [
    LineupComponent,
    ArtistsComponent,
    MixContestComponent,
    HomeComponent,
    ImageGalleryComponent,
    TicketsInfoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

