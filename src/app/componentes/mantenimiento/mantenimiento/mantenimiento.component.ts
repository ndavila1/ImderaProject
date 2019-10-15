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
  mantenimientos: any[] = [];
  accion: string;
  id: string;


  mantenimientoForm: FormGroup;

  createFormGroup() {
    return new FormGroup({
      fecha: new FormControl('', Validators.required),
      actividad: new FormControl('', Validators.required),
      escenarioForanea: new FormControl('', Validators.required)
    })
  }

  constructor(private servicio: EscenarioService, private modalService: NgbModal, private mantServicio: MantenimientoService) {
    this.mantenimientoForm = this.createFormGroup();
    this.accion = 'Registrar';
    this.id = '';
  }

  ngOnInit() {
    this.listarEscenarios();
    this.listar();
    
  }

  onResetForm() {
    this.mantenimientoForm.reset();
  }

  onSaveForm() {

    if (this.mantenimientoForm.valid) {
      if (this.accion == 'Registrar') {
        this.mantenimientoForm.addControl('getFiltro',new FormControl('', Validators.required));
        this.mantenimientoForm.get('getFiltro').setValue(1570838400000);
        var resultEscenario = this.escenarios.find(esce => esce.id == this.mantenimientoForm.value.escenarioForanea);
        var padre = this.mantenimientoForm.value.escenarioForanea;
        delete resultEscenario.id;
        resultEscenario.mantenimientos.push(this.mantenimientoForm.value);
        this.mantServicio.create(resultEscenario,padre);
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
  open(content, mantenimiento) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result;
    if (mantenimiento != undefined) {
      this.accion = 'Editar';
      this.mantenimientoForm.patchValue(mantenimiento);
      this.id = mantenimiento.id;
    } else {
      this.id = '';
      this.onResetForm();
    };
  }

  listarEscenarios(): void {
    this.servicio.listar().subscribe(data => {
      this.escenarios = data.map(elemento => {
        return {
          ...elemento as any
        }
      });
    });
  }

  listar(): void {
    this.mantServicio.cargarMensajes().subscribe(data => {
      this.mantenimientos = data.map(elemento => {
        return {
          ...elemento as any
        }
      });
    });
  }
}
