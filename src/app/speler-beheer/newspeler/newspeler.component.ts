import { SpelerService } from './../../services/speler.service';
import { Geslacht } from './../../enum/geslacht.enum';
import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Speler } from 'src/app/interfaces/speler';

@Component({
  selector: 'app-newspeler',
  templateUrl: './newspeler.component.html',
  styleUrls: ['./newspeler.component.scss']
})
export class NewspelerComponent implements OnInit {

  speler: Speler = new Speler();
  geslachten: Array<String> = Object.keys(Geslacht).filter(k => typeof Geslacht[k as any] === "number");
  user: User;
 

  constructor(public  spelerService: SpelerService    ) { }

  ngOnInit() {
    console.log(this.speler)
    console.log(this.geslachten)
  }

  addSpeler(form) {
    this.spelerService.addSpeler(this.speler);
  }

}
