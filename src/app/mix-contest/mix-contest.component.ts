import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-mix-contest',
  templateUrl: './mix-contest.component.html',
  styleUrls: ['./mix-contest.component.css']
})
export class MixContestComponent implements OnInit {

  static URL = 'http://localhost:8000/api/upload';
  public uploader: FileUploader = new FileUploader({url: MixContestComponent.URL, itemAlias: 'mp3'});

  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('MP3 upload:uploaded:', item, status, response);
     };
  }

}
