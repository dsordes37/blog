import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  img:string="";

  @Input()
  date:string="";

  @Input()
  title:string="";

  @Input()
  desc:string="";

  @Input()
  href:string='';

}
