import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
	title: string;
	email: string;
	comment: string;
	isLogged: boolean;
	errorMessage: string;

	constructor() { }

	ngOnInit() {
		let currentUserRaw = localStorage.getItem('currentUser');
		if (currentUserRaw) {
			this.email = JSON.parse(currentUserRaw).email;
			this.isLogged = true;
		}
	}

	send() {
		if (!this.title) {
			this.errorMessage = "Title is required!";
			return;
		}
		if (!this.email) {
			this.errorMessage = "Email is required!";
			return;
		}
		if (!this.comment) {
			this.errorMessage = "Comment is required!";
			return;
		}
		alert("Sended");
		this.errorMessage = undefined;
	}
}
