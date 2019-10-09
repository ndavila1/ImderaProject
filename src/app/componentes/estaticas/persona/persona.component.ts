import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  CreateFormsGroup() {
    return new FormGroup({
      documentoidentidad: new FormControl('',[Validators.required,Validators.min(0)]),
      nombrecompleto: new FormControl('',Validators.required),
      edad: new FormControl('',[Validators.required,Validators.min(0)]),
      fechanacimiento: new FormControl('',Validators.required),
      direccion: new FormControl('',Validators.required),
      comuna: new FormControl('',Validators.required),
      estrato: new FormControl('',[Validators.required,Validators.min(0)]),
      celular: new FormControl('',[Validators.required,Validators.min(0)]),
      rh: new FormControl('',Validators.required),
      eps: new FormControl('',Validators.required),
      sisben: new FormControl('',[Validators.required,Validators.min(0)]),
      telefonoFijo: new FormControl('',[Validators.required,Validators.min(0)]),
      enfermedades: new FormControl('',Validators.required),
      medicamentos: new FormControl('',Validators.required),
      institucioneducativa: new FormControl('',Validators.required),
      jornada: new FormControl('',Validators.required),
      grado: new FormControl('',Validators.required),
      nombrepadre: new FormControl('',Validators.required),
      telefonopadre: new FormControl('',[Validators.required,Validators.min(0)]),
      nombremadre: new FormControl('',Validators.required),
      telefonomadre: new FormControl('',[Validators.required,Validators.min(0)]),
      nombreacudiente: new FormControl('',Validators.required),
      telefonoacudiente: new FormControl('',[Validators.required,Validators.min(0)]),
      nombreacompanante: new FormControl('',Validators.required),
      telefonoacompanante: new FormControl('',[Validators.required,Validators.min(0)])
    });
  }

  persona : FormGroup;


  constructor() { 
    this.persona = this.CreateFormsGroup();
  }

  ngOnInit() {
  }


  onResetForm(){
    this.persona.reset();
  }
  register(){
    if(this.persona.valid){
      console.log(this.persona.value);
    }else{
  console.log("campos mal validados");
    }
    this.onResetForm();
  }

}
