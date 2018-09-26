import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Module/user';
@Injectable({
    providedIn: 'root'
})
export class UserService {
    private URL = 'https://conduit.productionready.io';
    constructor(public http: HttpClient) { }

    login(user: User) {
        return this.http.post(`${this.URL}/api/users/login`, user);
    }
    update(user) {
        return this.http.put(`${this.URL}/api/user`, user, {
            headers: new HttpHeaders({
                'Authorization': `Token ${user.user.token}`
            })
        });
    }
    getProfile(user){
        return this.http.get(`${this.URL}/api/profiles/${user.user.username}`);
    }
    Register(user){
        return this.http.post(`${this.URL}/api/users`,user);
    }
}
