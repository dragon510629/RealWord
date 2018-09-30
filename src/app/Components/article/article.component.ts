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
        });
    }    

    submitMethod(){
        this.articleService.addComment(this.comment,this.slug).subscribe((data)=>{
            this.getComment();
            console.log(data);
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
}
