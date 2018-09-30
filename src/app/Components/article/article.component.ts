import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../Sevice/article.service';
import { UserService } from '../../Sevice/user.service';
import { Router , ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    public slug : string;
    public article : any ;
    public comment : any ;
    public comments : any;
    public usernamecurrent : any;
    private username : string = "";
    private user : any;
    constructor(private articleService: ArticleService , private router : Router, private activatedRoute : ActivatedRoute , private userService : UserService) { }

    ngOnInit() {
        this.article = {
            article : {
                title : "",
                author : {
                    image : ""
                }
            }
        }
        this.comment = {
            comment : {
                body : ""
            }
        }
        this.comments = {
            comments : {
              body : "",
              author : {
                username : ""
              }
            }  
        }
        this.getCurrentUser();
        this.activatedRoute.params.subscribe(params => {
            this.slug = params['slug'];
            this.getSingleArticle();
            this.getComment();
        });
    }
    getSingleArticle() {
        this.articleService.getSingleArticle(this.slug).subscribe((data)=>{
            this.article = data;
            console.log(data);
            this.username = this.article.article.author.username;
            this.getProfile();
        });
    }    

    getProfile(){
        this.userService.getProfile(this.username).subscribe((data)=>{
            this.user = data;
        });
    }

    submitMethod(){
        this.articleService.addComment(this.comment,this.slug).subscribe((data)=>{
            this.getComment();
        });
    }

    getComment(){
        this.articleService.getComment(this.slug).subscribe((data)=>{
            this.comments = data;
            this.comments = this.comments.comments;
        });
    }

    getCurrentUser(){
        this.userService.getCurrentUser().subscribe((data)=>{
            this.usernamecurrent = data;
        });
    }

    deleteComment(value){
        this.articleService.deleteComment(this.slug,value).subscribe((data)=>{
            this.getComment();
        });
    }

    deleteArticle(){
        this.articleService.deleteArticle(this.slug).subscribe((data)=>{
            window.location.href = '/dashboard';
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

    favoriteArticle(){
        if(!this.article.article.favorited){
            this.articleService.favoriteArticle(this.slug).subscribe(data=>{
                this.getSingleArticle();
            });
        }else{
            this.articleService.unfavoriteArticle(this.slug).subscribe(data=>{
                this.getSingleArticle();
            });
        }    
    }
}
