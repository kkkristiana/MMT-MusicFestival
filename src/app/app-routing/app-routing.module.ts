import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from '../map/map.component';
import { ArtistsComponent } from '../artists/artists.component';
import { LineupComponent } from '../lineup/lineup.component';
import { MixContestComponent } from '../mix-contest/mix-contest.component';
import { HomeComponent } from '../home/home.component';
import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';
import { TicketsInfoComponent } from '../tickets-info/tickets-info.component';

@NgModule({
  imports: [ RouterModule.forRoot([
  {
      path: '',
      pathMatch: 'full',
      redirectTo: '/home'
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'artists',
      component: ArtistsComponent
  },
  {
      path: 'map',
      component: MapComponent
  },
  {
      path: 'lineup',
      component: LineupComponent
  },
  {
    path: 'mixcontest',
    component: MixContestComponent
  },
  {
    path: 'gallery',
    component: ImageGalleryComponent
  },
  {
     path: 'tickets',
     component: TicketsInfoComponent
  }
])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

