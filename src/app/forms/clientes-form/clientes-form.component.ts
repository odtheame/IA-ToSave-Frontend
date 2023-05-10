import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {
  addressForm = this.fb.group({
    nom: [null, Validators.required],
    direccion: [null, Validators.required],
    nit: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    idPersona: [null, Validators.required]
  });
 
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(this.addressForm.value);
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )
  }
}