import { Component, OnInit } from '@angular/core';
import { LivematchService } from '../services/livematch.service';
import { Match } from '../interfaces/match';
import { ConvertService } from '../services/convert.service';

@Component({
  selector: 'app-livematch',
  templateUrl: './livematch.component.html',
  styles: []
})
export class LivematchComponent implements OnInit {

  public livematch: Match;
  public started: Boolean = false;
  private interval;
  public convertService: ConvertService;
  public timerConfig = {
    twoBack: -60,
    oneBack: -10,
    oneForward: 10,
    twoForward: 60
  }

  constructor(private liveMAtchService: LivematchService, ) { }

  ngOnInit() {
    this.livematch = this.liveMAtchService.liveMatch;
    this.convertService = new ConvertService();
  }

  maakDoelpunt() {

  }

  maakTegenDoelpunt() {
    let tegendoelpunt = {
      tijd: this.livematch.tijd
    }
    this.livematch.tegenDoelpunten.push(tegendoelpunt);
    this.saveMatch();
  }

  saveMatch() {
    this.liveMAtchService.liveMatch = this.livematch;
    this.liveMAtchService.writeLS();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.livematch.tijd += 1;
      this.saveMatch();
    }, 1000);
    this.started = true;
  }

  stopTimer() {
    clearInterval(this.interval);
    this.started = false;
    console.log("heej")
  }

  addTime(secs){
      this.livematch.tijd += secs;

      this.livematch.tijd = this.livematch.tijd < 0: 0;
    
    
  }

  ngOnDestroy(){
    clearInterval(this.interval);
    this.started = false;
  }





}
