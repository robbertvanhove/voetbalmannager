import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matchitem',
  templateUrl: './matchitem.component.html',
  styleUrls: ['./matchitem.component.scss']
})
export class MatchitemComponent implements OnInit {

  @Input() match: Object;

  constructor() { }

  ngOnInit() {
  }

}
