import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    private URL = 'https://conduit.productionready.io';
    private token = localStorage.getItem('token');
    private httpOptions : any ;
    constructor(public http: HttpClient) { 
        this.httpOptions = {
            headers: new HttpHeaders({
                'Authorization': `Token ${this.token}`
            })
        };
    }

    upArticle(articles){
        return this.http.post(`${this.URL}/api/articles`,articles,this.httpOptions);
    }
    getArticle(onpage){
        return  this.http.get(`${this.URL}/api/articles?limit=10&offset=${onpage}`);
    }
    getArticlebyauthor(username){
        return this.http.get(`${this.URL}/api/articles?author=${username}`);
    }
    getSingleArticle(slug){
        return this.http.get(`${this.URL}/api/articles/${slug}`,this.httpOptions);
    }
    addComment(comment,slug){
        return this.http.post(`${this.URL}/api/articles/${slug}/comments`,comment,this.httpOptions);
    }

    getComment(slug){
        return this.http.get(`${this.URL}/api/articles/${slug}/comments`);
    }

    deleteComment(slug,id){
        return this.http.delete(`${this.URL}/api/articles/${slug}/comments/${id}`,this.httpOptions);
    }

    deleteArticle(slug){
        return this.http.delete(`${this.URL}/api/articles/${slug}`,this.httpOptions);
    }

    updateArticle(article,slug){
        return this.http.put(`${this.URL}/api/articles/${slug}`,article,this.httpOptions);
    }

    favoriteArticle(slug){
        return this.http.post(`${this.URL}/api/articles/${slug}/favorite`,{},this.httpOptions);
    }
    unfavoriteArticle(slug){
        return this.http.delete(`${this.URL}/api/articles/${slug}/favorite`,this.httpOptions);
    }

    getTag(){
        return this.http.get(`${this.URL}/api/tags`);
    }

    getAricleByTag(page,tag){
        return this.http.get(`${this.URL}/api/articles?limit=10&tag=${tag}&offset=${page}`);
    }

    getFeed(page){
        return this.http.get(`${this.URL}/api/articles/feed?limit=10&offset=${page}`,this.httpOptions);
    }
}
