import { NgBootstrapModule } from './../sharedModules/ng-bootstrap.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchBeheerComponent } from './match-beheer.component';
import { MatchitemComponent } from './matchitem/matchitem.component';
import { NgForm, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgBootstrapModule,
    FormsModule
  ],
  declarations: [MatchBeheerComponent, MatchitemComponent]
})
export class MatchBeheerModule { }
