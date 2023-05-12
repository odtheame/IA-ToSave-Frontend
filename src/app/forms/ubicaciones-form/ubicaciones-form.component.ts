import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ubicaciones-form',
  templateUrl: './ubicaciones-form.component.html',
  styleUrls: ['./ubicaciones-form.component.css']
})
export class UbicacionesFormComponent {
  addressForm = this.fb.group({
    dpto: [null, Validators.required],
    cdad: [null, Validators.required],
    lcld: [null, Validators.required],
    ncdt: [null, Validators.required],
    idUsr: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )  }
}
