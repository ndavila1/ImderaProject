import { Component, OnInit } from '@angular/core';
import { EscenarioService } from "./../../../services/escenario/escenario.service";
import Swal from "sweetalert2";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-escenario',
  templateUrl: './escenario.component.html',
  styleUrls: ['./escenario.component.css']
})
export class EscenarioComponent implements OnInit {

  escenarios: any[] = [];
  accion: string;
  id: string;

  createFormGroup() {
    return new FormGroup({
      nombreEscenario: new FormControl('', Validators.required),
      tipoEscenario: new FormControl('', Validators.required),
      comunaId: new FormControl('', Validators.required),
      claseEscenario: new FormControl('', Validators.required)
    })
  }

  escenarioForm: FormGroup;

  constructor(private servicio: EscenarioService, private modalService: NgbModal) {
    this.escenarioForm = this.createFormGroup();
    this.accion = 'Registrar';
    this.id='';
  }

  ngOnInit() {
    this.listar();
  }

  onResetForm() {
    this.escenarioForm.reset();
  }
  onSaveForm() {
    if (this.escenarioForm.valid) {
      if (this.accion == 'Registrar') {
        this.escenarioForm.addControl('mantenimientos',new FormControl('', Validators.required));
        this.escenarioForm.get('mantenimientos').setValue([]);
        this.servicio.create(this.escenarioForm.value);
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

  open(content, escenario) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result;
    if (escenario != undefined) {
      this.accion = 'Editar';
      this.escenarioForm.patchValue(escenario);
      this.id=escenario.id;
    } else {
      this.id='';
      this.onResetForm();
    };
  }



  listar(): void {
    this.servicio.listar().subscribe(data => {
      this.escenarios = data.map(elemento => {
        return {
          ...elemento as any
        }
      });
    });
  }

}
