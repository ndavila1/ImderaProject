import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrls: ['./deporte.component.css']
})
export class DeporteComponent implements OnInit {

  CreateFormsGroup() {
    return new FormGroup({
      nombre: new FormControl('',Validators.required)
    });
  }

  deporte : FormGroup;

  constructor() {
    this.deporte = this.CreateFormsGroup();
   }

  ngOnInit() {
  }

  onResetForm(){
    this.deporte.reset();
  }
  register(){
    if(this.deporte.valid){
      console.log(this.deporte.value);
    }else{
  console.log("campos mal validados");
    }
    this.onResetForm();
  }

}
