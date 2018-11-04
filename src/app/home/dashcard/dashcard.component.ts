import { Cardcontent } from './../../interfaces/cardcontent';
import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashcard',
  templateUrl: './dashcard.component.html',
  styles: []
})
export class DashcardComponent implements OnInit {

  @Input() titel: String;
  @Input() route: String;
  @Input() icon: String;


  constructor() {
    
   }

  ngOnInit() {
    
  }

}
