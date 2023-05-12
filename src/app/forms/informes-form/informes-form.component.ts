import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-informes-form',
  templateUrl: './informes-form.component.html',
  styleUrls: ['./informes-form.component.css']
})
export class InformesFormComponent {
  addressForm = this.fb.group({
    nInf: ['', Validators.required],
    idIcdc: [null, Validators.required],
    descr: [null, [Validators.required, Validators.maxLength(255)]],
    idDoc: [null, Validators.required]
  });
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )  }
}