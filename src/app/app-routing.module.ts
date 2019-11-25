import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './componentes/herramientas/eventos/eventos.component';
import { ApoyoOrganizacionesComunitariasComponent } from './componentes/deporte-social/apoyo-organizaciones-comunitarias/apoyo-organizaciones-comunitarias.component';
import { LoginComponent } from "./componentes/login/login/login.component";
import { PuntosActividadFisicaComponent } from './componentes/actividad-fisica/puntos-actividad-fisica/puntos-actividad-fisica.component';
import { DeporteComponent } from './componentes/deporte-escolar/deporte/deporte.component';
import { EscenarioComponent } from './componentes/mantenimiento/escenario/escenario.component';
import { EventosRecreandoComponent } from './componentes/recreando-comunidad/eventos-recreando/eventos-recreando.component';
import { ApoyoOrganismosDeportivosComponent } from './componentes/apoyo-organizaciones/apoyo-organismos-deportivos/apoyo-organismos-deportivos.component';
import { ApoyosEconomicosComponent } from './componentes/apoyo-organizaciones/apoyos-economicos/apoyos-economicos.component';
import { UsuarioComponent } from './componentes/estaticas/usuario/usuario.component';
import { PersonaComponent } from './componentes/estaticas/persona/persona.component';
import { Error403ForbiddenComponent } from './paginas-error/error403-forbidden/error403-forbidden.component';
import { Error404NotFoundComponent } from './paginas-error/error404-not-found/error404-not-found.component';
import { Error500InternalServerComponent } from './paginas-error/error500-internal-server/error500-internal-server.component';



const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'eventos',component: EventosComponent},
  {path:'apoyo-organizaciones-comunitarias',component: ApoyoOrganizacionesComunitariasComponent},
  {path:'puntos-actividad-fisica',component: PuntosActividadFisicaComponent},
  {path:'deporte',component: DeporteComponent},
  {path:'escenario',component: EscenarioComponent},
  {path:'eventos-recreando',component: EventosRecreandoComponent},
  {path:'apoyo-organismos-deportivos',component: ApoyoOrganismosDeportivosComponent},
  {path:'apoyos-economicos',component: ApoyosEconomicosComponent},
  {path:'usuario',component: UsuarioComponent},
  {path:'persona',component: PersonaComponent},
  { path: '**', component: Error404NotFoundComponent},
  { path: 'internal_server', component: Error500InternalServerComponent},
  { path: 'forbidden', component: Error403ForbiddenComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
