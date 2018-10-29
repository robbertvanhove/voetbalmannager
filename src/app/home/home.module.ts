import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashcardComponent } from './dashcard/dashcard.component';
import { ArticlecardComponent } from './articlecard/articlecard.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [HomeComponent, DashcardComponent, ArticlecardComponent]
})
export class HomeModule { }
