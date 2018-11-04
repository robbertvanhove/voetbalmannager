import { async } from '@angular/core/testing';
import { SpelerService } from './../services/speler.service';
import { Observable, config } from 'rxjs';
import { FootnewsService } from './../services/footnews.service';
import { AppModule } from './../app.module';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { Match } from '../interfaces/match';
import { LivematchService } from '../services/livematch.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  
  news$: Observable<any>;
  loading: Boolean = true;
  livematch: Match;
  matchBezig: Boolean;
  constructor(private liveMatchService: LivematchService, private footnewsService: FootnewsService, private progressConfig: NgbProgressbarConfig, private spelerService: SpelerService) {
    liveMatchService = new LivematchService();
  }

  ngOnInit() {
    this.getNews();
    this.matchBezig = this.liveMatchService.checkMatch();
    if(this.matchBezig){
      this.livematch = this.liveMatchService.liveMatch;
    }
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
