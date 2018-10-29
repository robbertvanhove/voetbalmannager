import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpelerBeheerComponent } from './speler-beheer.component';
import { NewspelerComponent } from './newspeler/newspeler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SpelerBeheerComponent, NewspelerComponent]
})
export class SpelerBeheerModule { }
