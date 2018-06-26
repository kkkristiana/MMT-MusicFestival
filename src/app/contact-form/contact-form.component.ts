import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
	title: string;
	email: string;
	isLogged: boolean;

	constructor() { }

	ngOnInit() {
		let currentUserRaw = localStorage.getItem('currentUser');
		if (currentUserRaw) {
			this.email = JSON.parse(currentUserRaw).email;
			this.isLogged = true;
		}
	}
}
