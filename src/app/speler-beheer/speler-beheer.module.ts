import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpelerBeheerComponent } from './speler-beheer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SpelerBeheerComponent]
})
export class SpelerBeheerModule { }
