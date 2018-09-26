import { Component, OnInit } from '@angular/core';
import { Register } from '../../Module/register';
import { UserService } from '../../Sevice/user.service';
import swal from 'sweetalert';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    private register: Register = new Register();
    constructor(private userservice : UserService) { }

    ngOnInit() {
        this.register = {
            "user": {
                username: "",
                email:  "",
                password: ""
            }
        }
    }
    onRegister() {
        console.log(this.register);
        this.userservice.Register(this.register).subscribe((data)=>{
            swal({
                text: "Register success!",
            });
            window.location.href = '/dashboard';
        },(err)=>{
            swal('Error', 'Wrong email or password', 'error');
        });
    }
}
