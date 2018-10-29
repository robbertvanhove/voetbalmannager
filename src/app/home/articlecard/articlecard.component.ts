import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articlecard',
  templateUrl: './articlecard.component.html',
  styleUrls: ['./articlecard.component.scss']
})
export class ArticlecardComponent implements OnInit {

  @Input() article: any;

  constructor() { }

  ngOnInit() {
  }

}
