import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    private URL = 'https://conduit.productionready.io';
    private token = localStorage.getItem('token');
    constructor(public http: HttpClient) { }

    upArticle(articles){
        return this.http.post(`${this.URL}/api/articles`,articles,{
            headers: new HttpHeaders({
                'Authorization': `Token ${this.token}`
            })
        });
    }
    getArticle(onpage){
        return  this.http.get(`${this.URL}/api/articles?limit=10&offset=${onpage}`);
    }
    getArticlebyauthor(username){
        return this.http.get(`${this.URL}/api/articles?author=${username}`);
    }
    getSingleArticle(slug){
        return this.http.get(`${this.URL}/api/articles/${slug}`);
    }
    addComment(comment,slug){
        return this.http.post(`${this.URL}/api/articles/${slug}/comments`,comment,{
            headers: new HttpHeaders({
                'Authorization': `Token ${this.token}`
            })
        });
    }

    getComment(slug){
        return this.http.get(`${this.URL}/api/articles/${slug}/comments`);
    }

    deleteComment(slug,id){
        return this.http.delete(`${this.URL}/api/articles/${slug}/comments/${id}`,{
            headers: new HttpHeaders({
                'Authorization': `Token ${this.token}`
            })
        });
    }
}
