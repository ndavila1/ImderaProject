import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404NotFoundComponent } from './error404-not-found/error404-not-found.component';
import { Error403ForbiddenComponent } from './error403-forbidden/error403-forbidden.component';
import { Error500InternalServerComponent } from './error500-internal-server/error500-internal-server.component';

@NgModule({
  declarations: [
    Error404NotFoundComponent,
    Error403ForbiddenComponent,
    Error500InternalServerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaginasErrorModule { }
