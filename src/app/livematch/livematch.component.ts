import { Component, OnInit } from '@angular/core';
import { LivematchService } from '../services/livematch.service';
import { Match } from '../interfaces/match';

@Component({
  selector: 'app-livematch',
  templateUrl: './livematch.component.html',
  styles: []
})
export class LivematchComponent implements OnInit {

  livematch: Match;
  constructor(private liveMAtchService: LivematchService) { }

  ngOnInit() {
    this.livematch = this.liveMAtchService.liveMatch;
  }

}
