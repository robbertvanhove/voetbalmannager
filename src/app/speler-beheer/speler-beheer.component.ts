import { Speler } from './../interfaces/speler';
import { Geslacht } from './../enum/geslacht.enum';
import { SpelerService } from './../services/speler.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-speler-beheer',
  templateUrl: './speler-beheer.component.html',
  styles: []
})
export class SpelerBeheerComponent implements OnInit {

  closeResult: String;
  spelers: Array<Object>;
  newSpeler: Speler;
  editSpeler: Speler;
  geslachten: Array<String> = Object.keys(Geslacht).filter(k => typeof Geslacht[k as any] === "number");
  modalReference: any;

  constructor(private modalService: NgbModal, public spelerService: SpelerService, private toastr: ToastrService) { }

  ngOnInit() {
    this.newSpeler= new Speler();
    this.editSpeler = new Speler();
  }

  open(content) {
    this.modalReference = this.modalService.open(content);
  }

  addSpeler() {
    this.spelerService.addSpeler(this.newSpeler);
    this.closeModal();
    this.toastr.success(this.newSpeler.naam + " toegevoegd!");
    this.newSpeler = new Speler();
  }

  updateSpeler(){
    this.spelerService.updateSpeler(this.editSpeler);
    this.closeModal();
    this.toastr.success("Speler bijgewerkt!", this.editSpeler.naam + " is bijgewerkt");

  }

  deleteSpeler(speler){
    console.log(speler);
    this.spelerService.deleteSpeler(speler);
    this.toastr.success(`${speler.naam} is verwijdert!`)
  }

  closeModal(){
    this.modalReference.close();
  }

}
