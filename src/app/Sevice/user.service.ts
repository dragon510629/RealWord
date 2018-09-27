import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Module/user';
@Injectable({
    providedIn: 'root'
})
export class UserService {
    private URL = 'https://conduit.productionready.io';
    private Token = localStorage.getItem('token');
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
    getProfile(username){
        return this.http.get(`${this.URL}/api/profiles/${username}`,{
            headers: new HttpHeaders({
                'Authorization': `Token ${this.Token}`
            })
        });
    }
    Register(user){
        return this.http.post(`${this.URL}/api/users`,user);
    }

    followUser(username){
        return this.http.post(`${this.URL}/api/profiles/${username}/follow`,{},{
            headers: new HttpHeaders({
                'Authorization': `Token ${this.Token}`
            })
        });
    }
    deletefllow(username){
        return this.http.delete(`${this.URL}/api/profiles/${username}/follow`,{
            headers: new HttpHeaders({
                'Authorization': `Token ${this.Token}`
            })
        });
    }
}
