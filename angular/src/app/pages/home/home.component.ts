import { Component, OnInit } from '@angular/core';
import {NewsModel} from 'src/app/models/newsModel';
import {NewsService} from 'src/app/services/news.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news:NewsModel|any

  bigNew:any
  constructor(private service:NewsService) { }

  ngOnInit(): void {
    this.novas()
  }

  novas(){
    this.service.getNews().subscribe({
      next:(res)=>{
        this.news={
          articles:res.articles
        }
      },
      error: ()=>console.log('not found')
    })
    
  }

  

  
  
}
