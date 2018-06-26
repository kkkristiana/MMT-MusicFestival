import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent {
	hide = true;
	email: string;
	password: string;
	confirmPassword: string;
	currentUser: any;
	errorMessage: string;

	constructor(private router: Router, private registerService: RegisterService) { }

	public async register() {
		if(!this.email){
			this.errorMessage = "Email is required!";
			return;
		}
		if(!this.password){
			this.errorMessage = "Password is required!";
			return;
		}
		if(!this.confirmPassword){
			this.errorMessage = "Confirm password is required!";
			return;
		}
		if (this.password != this.confirmPassword) {
			this.errorMessage = "Passwords does not match!";
			return;
		}

		try {
			await this.registerService.register(this.email, this.password);
			this.router.navigate(['./login']);
		} catch (error) {
			if (error.message.indexOf("already exists") > -1) {
				this.errorMessage = `User with email ${this.email} already exists!`;
			}
		}
	}
}
