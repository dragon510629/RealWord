import { Component, OnInit } from '@angular/core';
import { User } from '../../Module/user';
import { UserService } from '../../Sevice/user.service';
import swal from 'sweetalert';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private accounts : User = new User();
    constructor(private UserService : UserService ) { }

    ngOnInit() {
        this.accounts = {
            "user": {
                email: "",
                password: ""
            }
        }
    }

    onSubmit(){
        this.UserService.login(this.accounts).subscribe((data : any)=>{
            localStorage.setItem('token',data.user.token);
            localStorage.setItem('username',data.user.username );
            localStorage.setItem('email',data.user.email);
            window.location.href = '/dashboard';
        },(err)=>{
            swal('Error', 'Wrong email or password', 'error');
        });
    }

}
