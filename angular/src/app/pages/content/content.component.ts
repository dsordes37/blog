import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private id:string|null='0'

  img:string=''
  title:string=''

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>this.id=value.get('id'))
    this.setValuesToContent(this.id)
  }

  setValuesToContent(id:string|null){
    const result=fakeData.filter(article=> article.id == id)[0]
    this.img= `url(${result.urlToImage})`
    this.title=result.title

    
  }

}
