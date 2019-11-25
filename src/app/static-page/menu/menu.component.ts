import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links: any[];
  pens: any[];
  toggled: boolean;

  constructor() {
    this.toggled = false;
    this.links = [
      {
        title: 'Consolidado General',
        route: 'convocatorias'
      },
      {
        title: 'Apoyos Economicos',
        route: 'solicitud/estudiante'
      },
      {
        title: 'Discapacidad',
        route: 'modificar'
      },
      {
        title: 'Becados',
        route: 'practica/inicio'
      },
      {
        title: 'Reportes',
        route: 'convocatoria/cierre'
      }
    ];
    this.pens = [
     
      {
        title: '',
        route: 'listar/seguimiento'
      }, {
        title: '',
        route: 'listar/seguimiento'
      },
      {
        title: '',
        route: 'listar/seguimiento'
      },
      {
        title: '',
        route: 'listar/seguimiento'
      },
      {
        title: '',
        route: 'listar/seguimiento'
      },
      {
        title: '',
        route: 'listar/seguimiento'
      },
    ];
  }

  ngOnInit() {
  }

  modtrarOcultarMenu() {
    this.toggled = !this.toggled;
  }

}
