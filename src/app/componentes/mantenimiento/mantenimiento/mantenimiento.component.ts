import { Component, OnInit } from '@angular/core';
import { EscenarioService } from "./../../../services/escenario/escenario.service";
import { MantenimientoService } from "./../../../services/mantenimiento/mantenimiento.service";
import Swal from "sweetalert2";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


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
      escenarioForanea: new FormControl('', Validators.required),
      filtroMes: new FormControl(''),
      filtroAnio: new FormControl('')
    })
  }

  constructor(private servicio: EscenarioService, private modalService: NgbModal, private mantServicio: MantenimientoService) {
    this.mantenimientoForm = this.createFormGroup();
    this.accion = 'Registrar';
    this.id = '';
  }

  ngOnInit() {
    this.listarEscenarios();
    var mes = new Date().getMonth() + 1;
    this.listar(mes, new Date().getFullYear());

  }
/**
  ngDoCheck() {
    var n = [];
    this.mantenimientos.map(x=>{
      let a = this.escenarios.filter(escenario=> escenario.id === x.escenarioForanea)
      n.push({
        'mantenimiento':x,
        'nombreEscenario':a[0].nombreEscenario
      })

    });
    this.mantenimientos=n
  } */

  onResetForm() {
    this.mantenimientoForm.reset();
  }

  onSaveForm() {

    if (this.mantenimientoForm.valid) {
      if (this.accion == 'Registrar') {
        var fecha = new Date(this.mantenimientoForm.value.fecha);
        fecha.setHours(fecha.getHours() + 24);
        this.mantenimientoForm.get('filtroMes').setValue(fecha.getMonth() + 1);
        this.mantenimientoForm.get('filtroAnio').setValue(fecha.getFullYear());
        this.mantServicio.create(this.mantenimientoForm.value);
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
    console.log('www');
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

  listar(mes: number, anio: number) {

    console.log('as')
    this.mantServicio.listar(mes, anio).subscribe(data => {
      this.mantenimientos = data.map(elemento => {
        let a = this.escenarios.find(escenario=> escenario.id === elemento.escenarioForanea);
         var n ={
          'mantenimiento':elemento,
          'nombreEscenario':a.nombreEscenario
        };
        return n as any
      });
    });
  }


}
