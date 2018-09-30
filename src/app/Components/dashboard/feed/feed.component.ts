import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../Sevice/article.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public page: number = 0;
    public data: any = {};
    public pages: Array<number>;
    constructor(private articleService: ArticleService) { }

    ngOnInit() {
        this.get();
    }

    get() {
        this.articleService.getFeed(this.page).subscribe((data) => {
            this.data = data;
            this.pages = new Array(data['articlesCount'] / 10);
        });
    }
    setPage(i, event: any) {
        this.page = i * 10;
        this.get();
    }
    previous() {
        this.page = this.page - 10;
        this.get();
    }
    next() {
        this.page = this.page + 10;
        this.get();
    }

}
