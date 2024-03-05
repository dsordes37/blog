import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

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
  id:string="0";

  @Input()
  href:string='';

}
