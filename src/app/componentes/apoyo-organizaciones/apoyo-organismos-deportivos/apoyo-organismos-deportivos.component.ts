import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-apoyo-organismos-deportivos',
  templateUrl: './apoyo-organismos-deportivos.component.html',
  styleUrls: ['./apoyo-organismos-deportivos.component.css']
})
export class ApoyoOrganismosDeportivosComponent implements OnInit {

  CreateFormsGroup() {
    return new FormGroup({
      nombreOrganismo: new FormControl('',Validators.required),
      nombre: new FormControl('',Validators.required),
      lugar: new FormControl('',Validators.required),
      ciudad: new FormControl('',Validators.required),
      fecha: new FormControl('',Validators.required),
      tipo: new FormControl('',Validators.required),
      ceroacinco: new FormControl('',[Validators.required,Validators.min(0)]),
      seisadoce: new FormControl('',[Validators.required,Validators.min(0)]),
      treceadiecisiete: new FormControl('',[Validators.required,Validators.min(0)]),
      dieciochoaventiocho: new FormControl('',[Validators.required,Validators.min(0)]),
      ventiochomas: new FormControl('',[Validators.required,Validators.min(0)])
    });
  }

  apoyoOrganismosDeportivos : FormGroup;


  constructor() {
    this.apoyoOrganismosDeportivos = this.CreateFormsGroup();
  }

  ngOnInit() {
  }

  onResetForm(){
    this.apoyoOrganismosDeportivos.reset();
  }
  register(){
    if(this.apoyoOrganismosDeportivos.valid){
      console.log(this.apoyoOrganismosDeportivos.value);
    }else{
  console.log("campos mal validados");
    }
    this.onResetForm();
  }
}
