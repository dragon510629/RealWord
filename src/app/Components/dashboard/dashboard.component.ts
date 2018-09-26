import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../Sevice/article.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public page : number = 0;
  public data : any = {};
  public pages : Array <number>; 
  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.get();
  } 

  get(){
    this.articleService.getArticle(this.page).subscribe((data)=>{
      this.data = data;
      console.log(data);
      this.pages = new Array(data['articlesCount']/10);
    });
  }
  setPage(i,event:any){
    this.page = i*10;
    this.get();
  }
  previous(){
    this.page = this.page - 10;
    this.get();
  }
  next(){
    this.page = this.page + 10;
    this.get();
  }
}
