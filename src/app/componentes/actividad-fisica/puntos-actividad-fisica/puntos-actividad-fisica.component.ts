import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-puntos-actividad-fisica',
  templateUrl: './puntos-actividad-fisica.component.html',
  styleUrls: ['./puntos-actividad-fisica.component.css']
})
export class PuntosActividadFisicaComponent implements OnInit {

  CreateFormsGroup() {
    return new FormGroup({
      nombre: new FormControl('',Validators.required),
      lugar: new FormControl('',Validators.required),
      fecha: new FormControl('',Validators.required),
      comuna: new FormControl('',Validators.required),
      ceroacinco: new FormControl('',[Validators.required,Validators.min(0)]),
      seisadoce: new FormControl('',[Validators.required,Validators.min(0)]),
      treceadiecisiete: new FormControl('',[Validators.required,Validators.min(0)]),
      dieciochoaventiocho: new FormControl('',[Validators.required,Validators.min(0)]),
      ventiochomas: new FormControl('',[Validators.required,Validators.min(0)])
    });
  }

  puntosActividadFisica : FormGroup;

  constructor() {
    this.puntosActividadFisica = this.CreateFormsGroup();
   }

  ngOnInit() {
  }

  onResetForm(){
    this.puntosActividadFisica.reset();
  }
  register(){
    if(this.puntosActividadFisica.valid){
      console.log(this.puntosActividadFisica.value);
    }else{
  console.log("campos mal validados");
    }
    this.onResetForm();
  }

}
