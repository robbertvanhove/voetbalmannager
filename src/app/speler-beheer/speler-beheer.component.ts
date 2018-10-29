import { Speler } from 'src/app/interfaces/speler';
import { SpelerService } from './../services/speler.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-speler-beheer',
  templateUrl: './speler-beheer.component.html',
  styles: []
})
export class SpelerBeheerComponent implements OnInit {

  closeResult: String;
  spelers: Array<Object>;
  

  constructor(private modalService: NgbModal, private spelerService: SpelerService) { }

  

  ngOnInit() {
    this.leesSpelers();
    console.log(this.spelers)
  }

  leesSpelers(){
    let spelers = [];
    this.spelerService.spelers$.subscribe(data => {
      spelers = data
    });

    this.spelers = spelers;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
