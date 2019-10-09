import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  CreateFormsGroup() {
    return new FormGroup({
      cedula: new FormControl('',[Validators.required,Validators.min(0)]),
      email: new FormControl('',Validators.required),
      contrasena: new FormControl('',Validators.required),
      nombre: new FormControl('',Validators.required),
      apellido: new FormControl('',Validators.required),
      telefono: new FormControl('',[Validators.required,Validators.min(0)]),
      tipoUsuario: new FormControl('',Validators.required),
      programa: new FormControl('',Validators.required),
      subprograma: new FormControl('',Validators.required)
    });
  }

  usuario : FormGroup;

  constructor() { 
    this.usuario = this.CreateFormsGroup();
  }

  ngOnInit() {
  }

  onResetForm(){
    this.usuario.reset();
  }
  register(){
    if(this.usuario.valid){
      console.log(this.usuario.value);
    }else{
  console.log("campos mal validados");
    }
    this.onResetForm();
  }

}
