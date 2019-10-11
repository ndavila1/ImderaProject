import { Component, OnInit } from '@angular/core';
import { EscenarioService } from "./../../../services/escenario/escenario.service";
import { MantenimientoService } from "./../../../services/mantenimiento/mantenimiento.service";
import Swal from "sweetalert2";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

  escenarios: any[] = [];
  mantenimientos: any[] =[];
  accion: string;
  id: string;

  createFormGroup() {
    return new FormGroup({
      fecha: new FormControl('', Validators.required),
      actividad: new FormControl('', Validators.required)
    })
  }

  mantenimientoForm: FormGroup;

  constructor(private servicio: EscenarioService, private modalService: NgbModal, private mantServicio:MantenimientoService) { 
    this.mantenimientoForm = this.createFormGroup();
    this.accion = 'Registrar';
    this.id='';
  }

  ngOnInit() {
  }

  onResetForm() {
    this.mantenimientoForm.reset();
  }
  /**
  onSaveForm() {
    if (this.mantenimientoForm.valid) {
      if (this.accion == 'Registrar') {
        this.mantServicio.create(this.mantenimientoForm.value,escenario.id);
      } else {
        this.servicio.update(this.id,this.escenarioForm.value);
      }
      this.onResetForm();
      Swal.fire({
        type: 'success',
        title: 'Proceso efectuado correctamente',
        showConfirmButton: false,
        timer: 3500
      })
    } else {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Por favor llena todos los campos del formulario'
      })
    }
  }
**/
  open(content, escenario) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result;
    if (escenario != undefined) {
      this.accion = 'Editar';
      this.mantenimientoForm.patchValue(escenario);
      this.id=escenario.id;
    } else {
      this.id='';
      this.onResetForm();
    };
  }



}
