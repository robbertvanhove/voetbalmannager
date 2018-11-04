import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LivematchService } from './../services/livematch.service';
import { Match } from './../interfaces/match';
import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SpelerService } from '../services/speler.service';
import { Speler } from '../interfaces/speler';

@Component({
  selector: 'app-match-beheer',
  templateUrl: './match-beheer.component.html',
  providers: [NgbAccordionConfig],
  styles: []
})
export class MatchBeheerComponent implements OnInit {

  private modalReference: any;
  newMatch: Match;
  bevestig = false;
  spelers: Array<Speler>;
  matchBezig: Boolean;


  constructor(private modalService: NgbModal,
    public spelerService: SpelerService, public livematchService: LivematchService, private router: Router, private toastr: ToastrService) {
      livematchService = new LivematchService();
      this.matchBezig = livematchService.checkMatch();
  }

  ngOnInit() {
    this.newMatch = new Match();
  }

  openModal(content) {
    this.modalReference = this.modalService.open(content);
  }

  closeModal() {
    this.modalReference.close();
  }

  confirmMatch() {
    if (this.newMatch.beginSelectie.length > 0) {
      this.bevestig = true;
    } else {
      this.toastr.warning("Selecteer spelers voor uw selectie!");
    }
  }

  beginMatch() {
    this.livematchService.liveMatch = this.newMatch;
    this.livematchService.writeLS();
    this.closeModal();
    this.router.navigate(['/livematch']);
  }

  openLive() {
    this.router.navigate(['/livematch']);
  }

  toggleSelectie(speler: Speler) {
    if (!this.newMatch.beginSelectie.includes(speler)) {
      this.newMatch.beginSelectie.push(speler);
    } else {
      this.newMatch.beginSelectie.splice(this.newMatch.beginSelectie.indexOf(speler), 1);
    }
    console.log(this.newMatch.beginSelectie);
  }




}
