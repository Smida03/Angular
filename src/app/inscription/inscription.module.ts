import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    InscriptionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class InscriptionModule { }
