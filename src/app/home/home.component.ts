import { Observable } from 'rxjs';
import { FootnewsService } from './../services/footnews.service';
import { AppModule } from './../app.module';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  cards: Array<Object>;
  news$: Observable<any>;
  constructor(private footnewsService: FootnewsService, private spinner: NgxSpinnerService) {
    
  }

  ngOnInit() {
    this.setCards();
    this.getNews();
    console.log(this.news$);
    this.spinner.show();
  }

  setCards() {
    this.cards = [
      { titel: 'Matchbeheer',
        tekst: 'Beheer hier uw matchen',
        icon: 'fas fa-futbol',
        route: '/matchbeheer'
      },
      { titel: 'Spelerbeheer',
        tekst: 'Beheer hier uw spelers',
        icon: 'fas fa-user',
        route: '/spelersbeheer'
      },
      { titel: 'Statistieken',
        tekst: 'Bekijk hier uw statistieken',
        icon: 'far fa-chart-bar',
        route: '/stats'
      }
    ]
  }

  getNews(){
    this.news$ = this.footnewsService.getNews()
    .pipe(
      finalize((()=> {
        this.spinner.hide();
      }))
    );
    
  }

}
