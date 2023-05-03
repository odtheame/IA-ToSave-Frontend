import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ubicaciones-form',
  templateUrl: './ubicaciones-form.component.html',
  styleUrls: ['./ubicaciones-form.component.css']
})
export class UbicacionesFormComponent {
  addressForm = this.fb.group({
    idUbi: null,
    cdad: [null, Validators.required],
    dpto: [null, Validators.required],
    lcld: [null, Validators.required],
    ncdt: [null, Validators.required],
    idUsr: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
