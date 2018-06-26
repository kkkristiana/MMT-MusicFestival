import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
	selector: 'app-mix-contest',
	templateUrl: './mix-contest.component.html',
	styleUrls: ['./mix-contest.component.css']
})
export class MixContestComponent implements OnInit {
	static URL = 'http://localhost:8000/api/upload';
	public uploader: FileUploader = new FileUploader({ url: MixContestComponent.URL, itemAlias: 'mp3' });

	constructor(private router: Router, private dialog: MatDialog) { }

	ngOnInit() {
		if (JSON.parse(localStorage.getItem('currentUser')) == undefined) {
			this.router.navigate(['./login']);
		}

		this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

		this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
			console.log('MP3 upload:uploaded:', item, status, response);
		};
	}

	fileUpload(event) {
		let fileList: FileList = event.target.files;
		let file = fileList[0];

		if (file.type != "audio/mp3") {
			const dialogRef = this.dialog.open(NotSupportedFileErrorDialog, {
				width: '350px',
				data: {}
			});

			dialogRef.afterClosed().subscribe(result => {
				(document.getElementById("file-upload") as any).value = "";
			});
		}
	}
}

@Component({
	selector: 'notsupported-file-error-dialog',
	template: `
<h1 mat-dialog-title>Error occured</h1>
<div mat-dialog-content>
  <p>The selected file is not supported type. Please select a mp3 file!</p>
</div>
<div mat-dialog-actions>
  <button mat-button (click)="onNoClick()">Ok</button>
</div>
	`,
})
export class NotSupportedFileErrorDialog {
	constructor(
		public dialogRef: MatDialogRef<NotSupportedFileErrorDialog>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	onNoClick(): void {
		this.dialogRef.close();
	}
}