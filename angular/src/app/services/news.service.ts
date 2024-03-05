import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {NewsModel} from 'src/app/models/newsModel'

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url:string=''
  country:string='us'
  news?:NewsModel|any

  constructor(private http:HttpClient) { 
    this.url=environment.topNewsUrl
   }
  getNews():Observable<NewsModel>{
    return this.http.get<NewsModel>(`${this.url}&country=${this.country}`)
  };
}
