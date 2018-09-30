import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Sevice/user.service';
import { Router , ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../Sevice/article.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    private user : any = {
        "profile": {
            username: "",
            bio: "",
            image: "",  
            following: false
        }
    };
    public data : any = {};
    private username : string = "";
    constructor(private userService: UserService , private router : Router, private activatedRoute : ActivatedRoute , private articleService : ArticleService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.username = params['name'];
            this.getProfile();
        });
        this.getArticlebyAuthor();
    }

    getProfile(){
        this.userService.getProfile(this.username).subscribe((data)=>{
            this.user = data;
        });
    }
    getArticlebyAuthor(){
        this.articleService.getArticlebyauthor(this.username).subscribe((data)=>{
            this.data = data;
        });
    }
    Follow(){
        if(!this.user.profile.following){
            this.userService.followUser(this.username).subscribe((data)=>{
                this.getProfile();
            });
        }else{
            this.userService.deletefllow(this.username).subscribe((data)=>{
                this.getProfile();
            });
        }    
    }

}
