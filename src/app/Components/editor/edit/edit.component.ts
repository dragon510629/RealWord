import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../Sevice/article.service';
import { UserService } from '../../../Sevice/user.service';
@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    private slug : any;
    private article: any;
    private string : string = "";
    private amount : number;
    private user : any = {
        "profile": {
            username: "",
            bio: "",
            image: "",  
            following: false
        }
    };
    constructor(private router: Router, private activatedRoute: ActivatedRoute , private articleService : ArticleService , private userservice : UserService) { }

    ngOnInit() {
        this.article = {
            article : {
                
            }
        }
        this.activatedRoute.params.subscribe(params => {
            this.slug = params['id'];
            this.getArticle();
        });
    }
    // getProfile(){
    //     this.userservice.getProfile(this.username).subscribe((data)=>{
    //         this.user = data;
    //         console.log(this.user);
    //     });
    // }
    getArticle(){
        this.articleService.getSingleArticle(this.slug).subscribe((data)=>{
            this.article = data;
            this.article.article.tagList = [];
            console.log(this.article);
            this.article.article.tagList.forEach((element,index) => {
                // console.log(element,index);
                // this.string = this.string + element + ',';
                this.amount = index;
            });
            this.article.article.tagList.forEach((element,index) => {
                if(index<this.amount)
                // console.log(element,index);
                this.string = this.string + element + ',';  
                else
                this.string = this.string + element;
            });

        });
    }

    updateArticle(){
        var i = 0;
        var start = 0;
        var end = 0;
        var item = "";
        for(i=0;i<this.string.length;i++){       
            if(this.string[i]==','){
                end = i;
                item = this.string.slice(start,end);
                start = end+1;
                this.article.article.tagList.push(item);
            }
            if(i==this.string.length-1){
                item = this.string.slice(start,this.string.length);
                this.article.article.tagList.push(item);
            }
        }
        this.articleService.updateArticle(this.article,this.slug).subscribe((data)=>{

        },(err)=>{
            swal('Error', 'Up article fail', 'error');
        });
    }

}
