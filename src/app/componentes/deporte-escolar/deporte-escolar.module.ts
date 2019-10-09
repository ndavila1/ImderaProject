import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeporteComponent } from './deporte/deporte.component';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [DeporteComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ]
})
export class DeporteEscolarModule { }
