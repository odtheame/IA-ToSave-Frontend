import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css']
})
export class PersonasFormComponent {
  addressForm = this.fb.group({
    prNom: [null, Validators.required],
    sdNom: null,
    prApe: [null, Validators.required],
    sdApe: [null, Validators.required],
    correo: [null, [Validators.required, Validators.email]],
    telef: [null, [Validators.required, Validators.min(1000000), Validators.max(9999999999999)]],
    feNaci: [null, Validators.required],
    feIngr: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )  }
}
