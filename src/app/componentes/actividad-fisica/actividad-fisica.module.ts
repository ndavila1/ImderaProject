import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntosActividadFisicaComponent } from './puntos-actividad-fisica/puntos-actividad-fisica.component';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [PuntosActividadFisicaComponent],
  imports: [
    CommonModule , ReactiveFormsModule
  ]
})
export class ActividadFisicaModule { }
