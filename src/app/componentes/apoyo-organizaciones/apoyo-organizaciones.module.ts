import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApoyoOrganismosDeportivosComponent } from './apoyo-organismos-deportivos/apoyo-organismos-deportivos.component';
import { ApoyosEconomicosComponent } from './apoyos-economicos/apoyos-economicos.component';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ApoyoOrganismosDeportivosComponent, ApoyosEconomicosComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ]
})
export class ApoyoOrganizacionesModule { }
