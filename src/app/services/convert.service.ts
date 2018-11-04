import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor() { }

  secondsToTime(secs){
    let minutes = Math.floor(secs / 60);
    let seconds = secs - (minutes * 60);

    let displMins = minutes.toString();
    let displSecs = seconds.toString();

    if (minutes < 10) {displMins = "0"+minutes.toString();}
    if (seconds < 10) {displSecs = "0"+seconds.toString();}
    return displMins + ':' + displSecs;
  }
}
