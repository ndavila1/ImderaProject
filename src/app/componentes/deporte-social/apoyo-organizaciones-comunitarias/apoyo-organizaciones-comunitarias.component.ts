import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-apoyo-organizaciones-comunitarias',
  templateUrl: './apoyo-organizaciones-comunitarias.component.html',
  styleUrls: ['./apoyo-organizaciones-comunitarias.component.css']
})
export class ApoyoOrganizacionesComunitariasComponent implements OnInit {

  CreateFormsGroup() {
    return new FormGroup({
      barrio: new FormControl('',Validators.required),
      presidente: new FormControl('',Validators.required),
      organizaciondeportiva: new FormControl('',Validators.required),
      apoyo: new FormControl('',Validators.required),
      fecha: new FormControl('',Validators.required),
      comuna: new FormControl('',Validators.required),
      ceroacinco: new FormControl('',[Validators.required,Validators.min(0)]),
      seisadoce: new FormControl('',[Validators.required,Validators.min(0)]),
      treceadiecisiete: new FormControl('',[Validators.required,Validators.min(0)]),
      dieciochoaventiocho: new FormControl('',[Validators.required,Validators.min(0)]),
      ventiochomas: new FormControl('',[Validators.required,Validators.min(0)])
    });
  }

  apoyoOrganizacionesComunitarias : FormGroup;

  constructor() { 
    this.apoyoOrganizacionesComunitarias = this.CreateFormsGroup();
  }

  ngOnInit() {
  }

onResetForm(){
  this.apoyoOrganizacionesComunitarias.reset();
}
register(){
  if(this.apoyoOrganizacionesComunitarias.valid){
    console.log(this.apoyoOrganizacionesComunitarias.value);
  }else{
console.log("campos mal validados");
  }
  this.onResetForm();
}

}
