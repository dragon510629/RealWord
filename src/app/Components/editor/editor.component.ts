import { Component, OnInit } from '@angular/core';
import { Article } from '../../Module/article';
import { ArticleService } from '../../Sevice/article.service';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
    private article: Article = new Article();
    public string = "";
    constructor(private articleService : ArticleService) { }

    ngOnInit() {
        this.article = {
            article: {
                "title": "",
                "description": "",
                "body": "",
                "tagList": []
            }
        }   
    }
    upArticle(){
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
        this.articleService.upArticle(this.article).subscribe((data)=>{
            console.log(data);
        });
    }
}
