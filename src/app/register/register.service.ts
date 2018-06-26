import { Injectable } from '@angular/core';

declare var localStorage;

@Injectable()
export class RegisterService {

	constructor() { }

	public register(email: string, password: string) {
		return new Promise((resolve, reject) => {
			let user = { email: email, password: password };
			let loggedUsersRaw = localStorage.getItem('registeredUsers');
			if (!loggedUsersRaw) {
				loggedUsersRaw = "[]";
			}

			let loggedUsers = JSON.parse(loggedUsersRaw);
			if (loggedUsers.filter(u => u.email == email).length > 0) {
				throw Error("Current email already exists!");
			}

			loggedUsers.push(user);
			localStorage.setItem('registeredUsers', JSON.stringify(loggedUsers));

			resolve(true);
		})
	}
}
