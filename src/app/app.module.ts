import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActividadFisicaModule } from './componentes/actividad-fisica/actividad-fisica.module';
import { ApoyoOrganizacionesModule } from './componentes/apoyo-organizaciones/apoyo-organizaciones.module';
import { DeporteEscolarModule } from './componentes/deporte-escolar/deporte-escolar.module';
import { DeporteSocialModule } from './componentes/deporte-social/deporte-social.module';
import { EstaticasModule } from './componentes/estaticas/estaticas.module';
import { MantenimientoModule } from './componentes/mantenimiento/mantenimiento.module';
import { ParametricasModule } from './componentes/parametricas/parametricas.module';
import { RecreandoComunidadModule } from './componentes/recreando-comunidad/recreando-comunidad.module';
import { HerramientasModule } from './componentes/herramientas/herramientas.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActividadFisicaModule,
    ApoyoOrganizacionesModule,
    DeporteEscolarModule,
    DeporteSocialModule,
    EstaticasModule,
    MantenimientoModule,
    ParametricasModule,
    RecreandoComunidadModule,
    HerramientasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
