import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosRecreandoComponent } from './eventos-recreando/eventos-recreando.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [EventosRecreandoComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ]
})
export class RecreandoComunidadModule { }
