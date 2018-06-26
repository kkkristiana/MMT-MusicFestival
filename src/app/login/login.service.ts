import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

	constructor() { }

	public login(email, password) {
		return new Promise((resolve, reject) => {
			let loggedUsersRaw = localStorage.getItem('registeredUsers');
			if (!loggedUsersRaw) {
				resolve(false);
			}

			let loggedUsers: any[] = JSON.parse(loggedUsersRaw);
			let userExists = loggedUsers.filter(u => u.email == email && u.password == password).length > 0;

			resolve(userExists);
		});
	}
}
