import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {NewsModel} from 'src/app/models/newsModel';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  topUrl:string=''
  searchUrl:string=''
  country:string='us'
  news?:NewsModel|any

  constructor(private http:HttpClient) { 
    this.topUrl=environment.topNewsUrl
    this.searchUrl=environment.searchNewsUrl
   }
  getNews():Observable<NewsModel>{
    return this.http.get<NewsModel>(`${this.topUrl}&country=${this.country}`)
  };

  getSearchNews(search:string):Observable<NewsModel>{
    return this.http.get<NewsModel>(`${this.searchUrl}&q=${search}`)
  };
}
