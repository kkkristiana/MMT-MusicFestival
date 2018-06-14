import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat = 42.1273;
  lng = 27.8608;

  ngOnInit() {
  }

  findAccomodation() {
    // tslint:disable-next-line:max-line-length
    window.open('https://www.booking.com/searchresults.en-gb.html?label=gen173nr-1DCAEoggJCAlhYSDNYBGgXiAEBmAEuuAEHyAEM2AED6AEBkgIBeagCAw&sid=b6796ce320a00fa5443aeeb6b9aeb6ea&sb=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.en-gb.html%3Flabel%3Dgen173nr-1DCAEoggJCAlhYSDNYBGgXiAEBmAEuuAEHyAEM2AED6AEBkgIBeagCAw%3Bsid%3Db6796ce320a00fa5443aeeb6b9aeb6ea%3Bsb_price_type%3Dtotal%26%3B&ss=Varvara%2C+Burgas+Province%2C+Bulgaria&checkin_monthday=16&checkin_month=8&checkin_year=2018&checkout_monthday=19&checkout_month=8&checkout_year=2018&no_rooms=1&group_adults=2&group_children=0&from_sf=1&ss_raw=varvara&ac_position=0&ac_langcode=en&dest_id=-839474&dest_type=city&place_id_lat=42.12065&place_id_lon=27.90074&search_pageview_id=6d417e928ae4003f&search_selected=true', '_blank');
  }

  showGuide() {
    // tslint:disable-next-line:max-line-length
    window.open('http://telegra.ph/getting-to-Varvara-08-10?utm_source=tr.im&utm_medium=l.facebook.com&utm_campaign=tr.im%2FGET2BSF17&utm_content=link_click', '_blank');
  }

}
