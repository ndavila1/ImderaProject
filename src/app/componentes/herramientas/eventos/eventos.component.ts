import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      lugar: new FormControl('', Validators.required),
      organizacion: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      comuna: new FormControl('', Validators.required),
      ceroACinco: new FormControl('', [Validators.required, Validators.min(0)]),
      seisADoce: new FormControl('', [Validators.required, Validators.min(0)]),
      treceADiecisiete: new FormControl('', [Validators.required, Validators.min(0)]),
      dieciochoAVentiocho: new FormControl('', [Validators.required, Validators.min(0)]),
      ventiochoAMas: new FormControl('', [Validators.required, Validators.min(0)]),
      descripcion: new FormControl('', Validators.required)
    })
  }

  evento: FormGroup;

  constructor() {
    this.evento = this.createFormGroup();
  }

  ngOnInit() {
  }
  onResetForm() {
    this.evento.reset();
  }
  register() {
    if (this.evento.valid) {
      console.log(this.evento.value);
    } else {
      console.log("Campos mal validados");
    }
    this.onResetForm();
  }

}
