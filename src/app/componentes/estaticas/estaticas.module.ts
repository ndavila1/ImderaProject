import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { PersonaComponent } from './persona/persona.component';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UsuarioComponent, PersonaComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ]
})
export class EstaticasModule { }
