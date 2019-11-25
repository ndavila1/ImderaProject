import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscenarioComponent } from './escenario/escenario.component';
import { ReactiveFormsModule } from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';


@NgModule({
  declarations: [EscenarioComponent, MantenimientoComponent],
  imports: [
    CommonModule,ReactiveFormsModule,NgbModule
  ]
})
export class MantenimientoModule { }
