import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApoyoOrganizacionesComunitariasComponent } from './apoyo-organizaciones-comunitarias/apoyo-organizaciones-comunitarias.component';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ApoyoOrganizacionesComunitariasComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ]
})
export class DeporteSocialModule { }
