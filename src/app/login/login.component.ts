import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	hide = true;
	email: string;
	password: string;
	currentUser: any;
	errorMessage: string;

	constructor(private router: Router, private loginService: LoginService) { }

	ngOnInit() {
		let currentUserRaw = localStorage.getItem('currentUser');
		if (currentUserRaw) {
			this.currentUser = JSON.parse(currentUserRaw);
		}
	}

	public async login() {
		if(!this.email){
			this.errorMessage = "Email is required!";
			return;
		}
		if(!this.password){
			this.errorMessage = "Password is required!";
			return;
		}

		let isLogged = await this.loginService.login(this.email, this.password);
		if (isLogged) {
			localStorage.setItem('currentUser', JSON.stringify({ email: this.email }));
			this.errorMessage = undefined;
			this.router.navigate(['./mixcontest']);
		} else {
			this.errorMessage = "Incorrect email or password!";
		}
	}
}
