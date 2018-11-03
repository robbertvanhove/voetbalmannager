import { async } from '@angular/core/testing';
import { SpelerService } from './../services/speler.service';
import { Observable, config } from 'rxjs';
import { FootnewsService } from './../services/footnews.service';
import { AppModule } from './../app.module';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  cards: Array<Object>;
  news$: Observable<any>;
  loading: Boolean = true;

  constructor(private footnewsService: FootnewsService, private progressConfig: NgbProgressbarConfig, private spelerService: SpelerService) {

  }

  ngOnInit() {
    this.setCards();
    this.getNews();

  }

  setCards() {
    this.cards = [
      {
        titel: 'Matchbeheer',
        tekst: 'Beheer hier uw matchen',
        icon: 'fas fa-futbol',
        route: '/matchbeheer'
      },
      {
        titel: 'Spelerbeheer',
        tekst: `Laatst toegevoegd `,
        icon: 'fas fa-user',
        route: '/spelersbeheer'
      },
      {
        titel: 'Statistieken',
        tekst: 'Bekijk hier uw statistieken',
        icon: 'far fa-chart-bar',
        route: '/stats'
      }
    ];
  }

  getNews() {
    this.news$ = this.footnewsService.getNews()
      .pipe(
        finalize((() => {
          this.loading = false;
        }))
      );

  }

}
