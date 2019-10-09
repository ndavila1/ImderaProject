import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscenarioComponent } from './escenario/escenario.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [EscenarioComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ]
})
export class MantenimientoModule { }
