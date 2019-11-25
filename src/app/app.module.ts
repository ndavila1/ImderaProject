import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticPageModule } from './static-page/static-page.module';
import { PaginasErrorModule } from './paginas-error/paginaserror.module';

//Modulos de la aplicacion
import { ActividadFisicaModule } from './componentes/actividad-fisica/actividad-fisica.module';
import { ApoyoOrganizacionesModule } from './componentes/apoyo-organizaciones/apoyo-organizaciones.module';
import { DeporteEscolarModule } from './componentes/deporte-escolar/deporte-escolar.module';
import { DeporteSocialModule } from './componentes/deporte-social/deporte-social.module';
import { EstaticasModule } from './componentes/estaticas/estaticas.module';
import { MantenimientoModule } from './componentes/mantenimiento/mantenimiento.module';
import { ParametricasModule } from './componentes/parametricas/parametricas.module';
import { RecreandoComunidadModule } from './componentes/recreando-comunidad/recreando-comunidad.module';
import { HerramientasModule } from './componentes/herramientas/herramientas.module';
import { LoginModule } from "./componentes/login/login.module";

//Configuracion firebase
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestoreModule, AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ActividadFisicaModule,
    ApoyoOrganizacionesModule,
    DeporteEscolarModule,
    DeporteSocialModule,
    EstaticasModule,
    MantenimientoModule,
    ParametricasModule,
    RecreandoComunidadModule,
    HerramientasModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    StaticPageModule,
    PaginasErrorModule,
  ],
  providers: [AngularFirestore,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
