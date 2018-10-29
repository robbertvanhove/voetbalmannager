import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-match-beheer',
  templateUrl: './match-beheer.component.html',
  providers: [NgbAccordionConfig],
  styles: []
})
export class MatchBeheerComponent implements OnInit {
  matchen: Array<Object>;

  constructor(config: NgbAccordionConfig) {
    config.closeOthers=true;
    config.type='secondary white-text d-flex justify-content-between align-items-center';
   }

  ngOnInit() {
    this.setMatchen();
  }
//TODO: Dees afwerken
  setMatchen() {
    this.matchen = [
      {
        thuis: true,
        datum: '28-10-2018',
        tijd: '14:05',
        tegenstander: 'Oevel',
        afgelopen: true,
        doelpunten: [
          {
            spelerKey: '1',
            tijd: '243'
          },
          {
            spelerKey: '2',
            tijd: '400'
          }
        ],
        tegendoelpunten:[
          {
            tijd: 300
          }
        ],
        
      },
      {
        thuis: false,
        datum: '22-10-2018',
        tijd: '14:05',
        tegenstander: 'Merksplas',
        afgelopen: true,
        doelpunten: [
          {
            spelerKey: '1',
            tijd: '243'
          }
        ],
        tegendoelpunten:[
          {
            tijd: 300
          }
        ],
        
      },
      { 
        thuis: true,
        datum: '22-10-2018',
        tijd: '14:05',
        tegenstander: 'Lentezon',
        afgelopen: true,
        doelpunten: [
          
        ],
        tegendoelpunten:[
          {
            tijd: 300
          }
        ],
        
      },
    ]
  }

}
