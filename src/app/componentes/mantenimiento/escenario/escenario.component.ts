import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-escenario',
  templateUrl: './escenario.component.html',
  styleUrls: ['./escenario.component.css']
})
export class EscenarioComponent implements OnInit {

  CreateFormsGroup() {
    return new FormGroup({
      nombre: new FormControl('',Validators.required),
      tipo: new FormControl('',Validators.required),
      comuna: new FormControl('',Validators.required),
      clase: new FormControl('',Validators.required),
      estado: new FormControl('',Validators.required)
     
    });
  }

  escenario : FormGroup;

  constructor() { 
    this.escenario = this.CreateFormsGroup();
  }

  ngOnInit() {
  }

  onResetForm(){
    this.escenario.reset();
  }
  register(){
    if(this.escenario.valid){
      console.log(this.escenario.value);
    }else{
  console.log("campos mal validados");
    }
    this.onResetForm();
  }

}
