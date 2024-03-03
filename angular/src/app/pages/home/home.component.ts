import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {NewsModel} from 'src/app/models/newsModel'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url:string=''
  country:string='br'
  news?:NewsModel|any

  constructor(private http:HttpClient) { 
    this.url=environment.topNewsUrl
    
   }

  ngOnInit(): void {
    console.log(`${this.url}&country=${this.country}`)
    this.novas()
  }
  getNews():Observable<NewsModel>{
    return this.http.get<NewsModel>(`${this.url}&country=${this.country}`)
  };

  novas(){
    this.getNews().subscribe({
      next:(res)=>{
        this.news={
          status:res.status
        }
        console.log(this.news)
      },
      error: ()=>console.log('not found')
    })
    
  }
}
