import { NgBootstrapModule } from './../sharedModules/ng-bootstrap.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchBeheerComponent } from './match-beheer.component';
import { MatchitemComponent } from './matchitem/matchitem.component';

@NgModule({
  imports: [
    CommonModule,
    NgBootstrapModule
  ],
  declarations: [MatchBeheerComponent, MatchitemComponent]
})
export class MatchBeheerModule { }
