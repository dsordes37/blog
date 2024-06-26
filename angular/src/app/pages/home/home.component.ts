import { Component, OnInit } from '@angular/core';
import { article } from 'src/app/models/article';
import {NewsService} from 'src/app/services/news.service';
import {fakeData} from 'src/app/data/fakeData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles:article[]=[]
  load:boolean=false

  constructor(private service:NewsService) { 
    //this.topNews()
    this.articles=fakeData
    this.load=true
  }

  ngOnInit(): void {
    

  }

  topNews(){
    this.service.getNews().subscribe({
      next:(res)=>{
        res.articles.map((p:any)=>{
          if(p.urlToImage!=null){
            this.articles.push(p)
            
          }
        })
        this.load=true
      },
      error: ()=>console.log('not found')
    })
    
  } 
}
