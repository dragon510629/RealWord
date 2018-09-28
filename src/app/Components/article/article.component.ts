import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../Sevice/article.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    public slug : string;
    constructor(private articleService: ArticleService , private router : Router, private activatedRoute : ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.slug = params['slug'];
            this.getSingleArticle();
        });
    }
    getSingleArticle() {
        this.articleService.getSingleArticle(this.slug).subscribe((data)=>{
            console.log(data);
        });
    }    
}
