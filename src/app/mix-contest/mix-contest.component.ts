import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mix-contest',
  templateUrl: './mix-contest.component.html',
  styleUrls: ['./mix-contest.component.css']
})
export class MixContestComponent implements OnInit {

  static URL = 'http://localhost:8000/api/upload';
  public uploader: FileUploader = new FileUploader({ url: MixContestComponent.URL, itemAlias: 'mp3' });

  constructor(private router: Router) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('currentUser')) == undefined) {
      this.router.navigate(['./login']);
    }

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('MP3 upload:uploaded:', item, status, response);
    };
  }

}
