import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../Sevice/article.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
    public page: number = 0;
    private tag : string;
    private data:any;
    public pages: Array<number>;
    constructor(private articleService: ArticleService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.data = {
            articles : []
        }
        this.activatedRoute.params.subscribe(params => {
            this.tag = params['tag'];
            this.getAricleTag();
            
        });
        console.log(this.tag);
    }
    getAricleTag() {
        this.articleService.getAricleByTag(this.page,this.tag).subscribe(data=>{
            this.data = data;
            this.pages = new Array(data['articlesCount'] / 10);
        });
    }
    setPage(i, event: any) {
        this.page = i * 10;
        this.getAricleTag();
    }
    previous() {
        this.page = this.page - 10;
        this.getAricleTag();
    }
    next() {
        this.page = this.page + 10;
        this.getAricleTag();
    }
}
