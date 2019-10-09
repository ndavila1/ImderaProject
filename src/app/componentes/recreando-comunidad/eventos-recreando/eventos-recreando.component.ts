import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-eventos-recreando',
  templateUrl: './eventos-recreando.component.html',
  styleUrls: ['./eventos-recreando.component.css']
})
export class EventosRecreandoComponent implements OnInit {

  CreateFormsGroup() {
    return new FormGroup({
      nombreOrganizacion: new FormControl('',Validators.required),
      sitio: new FormControl('',Validators.required),
      tipoEvento: new FormControl('',Validators.required),
      fecha: new FormControl('',Validators.required),
      comuna: new FormControl('',Validators.required),
      ceroacinco: new FormControl('',[Validators.required,Validators.min(0)]),
      seisadoce: new FormControl('',[Validators.required,Validators.min(0)]),
      treceadiecisiete: new FormControl('',[Validators.required,Validators.min(0)]),
      dieciochoaventiocho: new FormControl('',[Validators.required,Validators.min(0)]),
      ventiochomas: new FormControl('',[Validators.required,Validators.min(0)])
    });
  }

  eventosRecreando : FormGroup;

  constructor() { 
    this.eventosRecreando = this.CreateFormsGroup();
  }

  ngOnInit() {
  }

  onResetForm(){
    this.eventosRecreando.reset();
  }
  register(){
    if(this.eventosRecreando.valid){
      console.log(this.eventosRecreando.value);
    }else{
  console.log("campos mal validados");
    }
    this.onResetForm();
  }

}
