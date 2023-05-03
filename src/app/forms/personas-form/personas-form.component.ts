import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css']
})
export class PersonasFormComponent {
  addressForm = this.fb.group({
    idPrsn: null,
    prNom: [null, Validators.required],
    sdNom: null,
    prApe: [null, Validators.required],
    sdApe: [null, Validators.required],
    correo: [null, Validators.required, Validators.email],
    telef: [null, Validators.required, Validators.minLength(7), Validators.maxLength(13)],
    feNaci: [null, Validators.required, Validators.email],
    feIngr: [null, Validators.required, Validators.email]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
