import { Match } from './../interfaces/match';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivematchService {


  public liveMatch: Match;
  private busy: Boolean;

  constructor() { 
    this.readLS();
  }

  private readLS(){
    const livematch_str = localStorage.getItem('livematch');
    if(livematch_str !== null){
      this.liveMatch = JSON.parse(livematch_str);
      this.busy = true;
    } else {
      this.busy = false;
    }
  }

  public writeLS(){
    localStorage.setItem('livematch', JSON.stringify(this.liveMatch));
  }

  public checkMatch(){
    return this.busy;
  }
}
