import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './componentes/herramientas/eventos/eventos.component';
import { ApoyoOrganizacionesComunitariasComponent } from './componentes/deporte-social/apoyo-organizaciones-comunitarias/apoyo-organizaciones-comunitarias.component';


const routes: Routes = [
  {path:'eventos',component: EventosComponent},
  {path:'apoyo-organizaciones-comunitarias',component: ApoyoOrganizacionesComunitariasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
