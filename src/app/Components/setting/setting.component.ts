import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Sevice/user.service';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
    private updateuser = {
        user: {
            email: "",
            username: "",
            password: "",
            image: "",
            bio: "",
            token: ""
        }
    }
    private URL_picture: string = "";
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.updateuser.user.username = localStorage.getItem('username');
        this.updateuser.user.email = localStorage.getItem('email');
        this.updateuser.user.token = localStorage.getItem('token');
        this.getProfile();
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.href = '/login';
    }

    update() {
        console.log(this.updateuser);
        this.userService.update(this.updateuser).subscribe((data:any) => {
            swal('Gotcha!','Update Complate', 'success');
        });
    }
    getProfile() {
        this.userService.getProfile(this.updateuser.user.username).subscribe((data: any) => {
            this.updateuser.user.image = data.profile.image;
            this.updateuser.user.bio = data.profile.bio;
        });
    }
}
