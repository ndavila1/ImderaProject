import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-apoyos-economicos',
  templateUrl: './apoyos-economicos.component.html',
  styleUrls: ['./apoyos-economicos.component.css']
})
export class ApoyosEconomicosComponent implements OnInit {

  CreateFormsGroup() {
    return new FormGroup({
      nombre: new FormControl('',Validators.required),
      representante: new FormControl('',Validators.required),
      fecha: new FormControl('',Validators.required),
      valorapoyado: new FormControl('',[Validators.required, Validators.min(0)]),
      concepto: new FormControl('',Validators.required)
    });
  }
  apoyosEconomicos : FormGroup;

  constructor() {
    this.apoyosEconomicos = this.CreateFormsGroup();
   }

  ngOnInit() {
  }
  onResetForm(){
    this.apoyosEconomicos.reset();
  }
  register(){
    if(this.apoyosEconomicos.valid){
      console.log(this.apoyosEconomicos.value);
    }else{
  console.log("campos mal validados");
    }
    this.onResetForm();
  }
}
