import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-incidencias-form',
  templateUrl: './incidencias-form.component.html',
  styleUrls: ['./incidencias-form.component.css']
})
export class IncidenciasFormComponent {
  addressForm = this.fb.group({
    anmla: [null, Validators.required],
    idUbi: [null, Validators.required],
    fecha: [null, Validators.required],
    hora: [null, Validators.required],
    sjts: [null, Validators.required],
    apbc: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )  }
}